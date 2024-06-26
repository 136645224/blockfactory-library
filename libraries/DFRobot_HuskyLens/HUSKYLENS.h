#include "Wire.h"
#include <SoftwareSerial.h>
#include "HuskyLensProtocolCore.h"
#include "Arduino.h"

#ifndef _HUSKYLENS_H
#define _HUSKYLENS_H

#define HUSKYLENS_FIRMWARE_VERSION "0.5.1"

////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

enum protocolCommand
{
    COMMAND_REQUEST = 0x20,
    COMMAND_REQUEST_BLOCKS,
    COMMAND_REQUEST_ARROWS,
    COMMAND_REQUEST_LEARNED,
    COMMAND_REQUEST_BLOCKS_LEARNED,
    COMMAND_REQUEST_ARROWS_LEARNED,
    COMMAND_REQUEST_BY_ID,
    COMMAND_REQUEST_BLOCKS_BY_ID,
    COMMAND_REQUEST_ARROWS_BY_ID,
    COMMAND_RETURN_INFO,
    COMMAND_RETURN_BLOCK,
    COMMAND_RETURN_ARROW,
    COMMAND_REQUEST_KNOCK,
    COMMAND_REQUEST_ALGORITHM,
    COMMAND_RETURN_OK,
    COMMAND_REQUEST_NAME,
    COMMAND_REQUEST_TAKE_PHOTO_TO_SD_CARD = 0x30,
    COMMAND_REQUEST_SAVE_MODEL_TO_SD_CARD = 0x32,
    COMMAND_REQUEST_LOAD_MODEL_FROM_SD_CARD = 0x33,
    COMMAND_REQUEST_CUSTOM_TEXT = 0x34,
    COMMAND_REQUEST_CLEAR_TEXT = 0x35,
    COMMAND_REQUEST_LEARN_ONECE = 0x36,
    COMMAND_REQUEST_FORGET = 0x37,
    COMMAND_REQUEST_SCREENSHOT_TO_SD_CARD = 0x39,
    COMMAND_REQUEST_FIRMWARE_VERSION = 0x3C
};

typedef struct
{
    uint8_t command;
    union {
        int16_t first;
        int16_t xCenter;
        int16_t xOrigin;
        int16_t protocolSize;
        int16_t algorithmType;
        int16_t requestID;
    };
    union {
        int16_t second;
        int16_t yCenter;
        int16_t yOrigin;
        int16_t knowledgeSize;
    };
    union {
        int16_t third;
        int16_t width;
        int16_t xTarget;
        int16_t frameNum;
    };
    union {
        int16_t fourth;
        int16_t height;
        int16_t yTarget;
    };
    union {
        int16_t fifth;
        int16_t ID;
        int16_t length;
    };
    union {
        uint8_t *data;
    };
} Protocol_t;

enum protocolAlgorithm
{
    ALGORITHM_FACE_RECOGNITION,
    ALGORITHM_OBJECT_TRACKING,
    ALGORITHM_OBJECT_RECOGNITION,
    ALGORITHM_LINE_TRACKING,
    ALGORITHM_COLOR_RECOGNITION,
    ALGORITHM_TAG_RECOGNITION,
    ALGORITHM_OBJECT_CLASSIFICATION,
    ALGORITHM_QR_RECOGNITION,
    ALGORITHM_BARCODE_RECOGNITION
};

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

typedef Protocol_t HUSKYLENSResult;

class HUSKYLENS
{
private:
    TwoWire *wire;
    Stream *stream;
    unsigned long timeOutDuration = 5000;
    unsigned long timeOutTimer;
    int16_t currentIndex = 0;
    Protocol_t protocolCache;

    void protocolWrite(uint8_t *buffer, int length)
    {
        if (wire)
        {
            wire->beginTransmission(0x32);
            wire->write(buffer, length);
            wire->endTransmission();
        }
        else if (stream)
        {
            stream->write(buffer, length);
        }
    }

    void timerBegin()
    {
        timeOutTimer = millis();
    }

    bool timerAvailable()
    {
        return (millis() - timeOutTimer > timeOutDuration);
    }

    bool protocolAvailable()
    {
        if (wire)
        {
            if (!wire->available())
            {
                wire->requestFrom(0x32, 16);
            }
            while (wire->available())
            {
                int result = wire->read();
                if (husky_lens_protocol_receive(result))
                {
                    return true;
                }
            }
        }
        else if (stream)
        {
            while (stream->available())
            {
                int result = stream->read();
                if (husky_lens_protocol_receive(result))
                {
                    return true;
                }
            }
        }
        return false;
    }

    Protocol_t protocolInfo;
    Protocol_t *protocolPtr = NULL;

    bool processReturn()
    {
        if (!wait(COMMAND_RETURN_INFO))
            return false;
        protocolReadReturnInfo(protocolInfo);
#if defined(ESP_PLATFORM)
        protocolPtr = (Protocol_t *)realloc(protocolPtr, _max(protocolInfo.protocolSize, 1) * sizeof(Protocol_t));
#else
        protocolPtr = (Protocol_t *)realloc(protocolPtr, max(protocolInfo.protocolSize, 1) * sizeof(Protocol_t));
#endif
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (!wait())
                return false;
            if (protocolReadReturnBlock(protocolPtr[i]))
                continue;
            else if (protocolReadReturnArrow(protocolPtr[i]))
                continue;
            else
                return false;
        }
        return true;
    }

    HUSKYLENSResult resultDefault;

    bool wait(uint8_t command = 0)
    {
        timerBegin();
        while (!timerAvailable())
        {
            if (protocolAvailable())
            {
                if (command)
                {
                    if (husky_lens_protocol_read_begin(command))
                        return true;
                }
                else
                {
                    return true;
                }
            }
        }
        return false;
    }

    bool readKnock()
    {
        for (int i = 0; i < 5; i++)
        {
            protocolWriteRequestKnock();
            if (wait(COMMAND_RETURN_OK))
            {
                writeFirmwareVersion(HUSKYLENS_FIRMWARE_VERSION);
                return true;
            }
        }
        return false;
    }

    bool writeFirmwareVersion(String version)
    {
        Protocol_t protocol;
        uint8_t length = version.length();
        uint8_t data[length + 2] = {length};
        version.toCharArray((char *)data + 1, length + 1);
        protocol.length = length + 1;
        protocol.data = data;
        protocolWriteRequestFirmwareVersion(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    HUSKYLENSResult readBlock(int ID = 1, int index = 0)
    {
        Protocol_t *protocol = readBlockByIDProtocol(ID, index);
        return protocol ? *protocol : resultDefault;
    }
    HUSKYLENSResult readBlockDirect(int index)
    {
        Protocol_t *protocol = readBlockProtocol(index);
        return protocol ? *protocol : resultDefault;
    }

    HUSKYLENSResult readArrow(int ID = 1, int index = 0)
    {
        Protocol_t *protocol = readArrowByIDProtocol(ID, index);
        return protocol ? *protocol : resultDefault;
    }
    HUSKYLENSResult readArrowDirect(int index)
    {
        Protocol_t *protocol = readArrowProtocol(index);
        return protocol ? *protocol : resultDefault;
    }

public:
    class Blocks
    {
    private:
        HUSKYLENS *entity;

    public:
        void init(HUSKYLENS *e)
        {
            entity = e;
        }

        int available()
        {
            return entity->countBlocks();
        }
        HUSKYLENSResult readDirect(int index)
        {
            return entity->readBlockDirect(index);
        }

        int available(int ID)
        {
            return entity->countBlocks(ID);
        }
        HUSKYLENSResult read(int ID = 1, int index = 0)
        {
            return entity->readBlock(ID, index);
        }
    } blocks;

    class Arrows
    {
    private:
        HUSKYLENS *entity;

    public:
        void init(HUSKYLENS *e)
        {
            entity = e;
        }
        int available()
        {
            return entity->countArrows();
        }
        HUSKYLENSResult readDirect(int index)
        {
            return entity->readArrowDirect(index);
        }

        int available(int ID)
        {
            return entity->countArrows(ID);
        }
        HUSKYLENSResult read(int ID = 1, int index = 0)
        {
            return entity->readArrow(ID, index);
        }
    } arrows;

    HUSKYLENS(/* args */)
    {
        blocks.init(this);
        arrows.init(this);
        wire = NULL;
        stream = NULL;
        resultDefault.command = -1;
        resultDefault.first = -1;
        resultDefault.second = -1;
        resultDefault.third = -1;
        resultDefault.fourth = -1;
        resultDefault.fifth = -1;
    }

    ~HUSKYLENS()
    {
    }

    bool begin(Stream &streamInput)
    {
        stream = &streamInput;
        wire = NULL;
        return readKnock();
    }

    bool begin(TwoWire &streamInput)
    {
        stream = NULL;
        wire = &streamInput;
        return readKnock();
    }

    void setTimeOutDuration(unsigned long timeOutDurationInput)
    {
        timeOutDuration = timeOutDurationInput;
    }

    bool request()
    {
        protocolWriteRequest();
        return processReturn();
    }
    bool requestBlocks()
    {
        protocolWriteRequestBlocks();
        return processReturn();
    }
    bool requestArrows()
    {
        protocolWriteRequestArrows();
        return processReturn();
    }
    bool requestLearned()
    {
        protocolWriteRequestLearned();
        return processReturn();
    }
    bool requestBlocksLearned()
    {
        protocolWriteRequestBlocksLearned();
        return processReturn();
    }
    bool requestArrowsLearned()
    {
        protocolWriteRequestArrowsLearned();
        return processReturn();
    }
    bool request(int16_t ID)
    {
        Protocol_t protocol;
        protocol.requestID = ID;
        protocolWriteRequestByID(protocol);
        return processReturn();
    }
    bool requestBlocks(int16_t ID)
    {
        Protocol_t protocol;
        protocol.requestID = ID;
        protocolWriteRequestBlocksByID(protocol);
        return processReturn();
    }
    bool requestArrows(int16_t ID)
    {
        Protocol_t protocol;
        protocol.requestID = ID;
        protocolWriteRequestArrowsByID(protocol);
        return processReturn();
    }

    int available()
    {
        return count();
    }

    int available(int ID)
    {
        return count(ID);
    }

    bool isLearned()
    {
        return countLearnedIDs();
    }

    bool isLearned(int ID)
    {
        return (ID <= countLearnedIDs()) && ID > 0;
    }

    int16_t frameNumber()
    {
        return protocolInfo.frameNum;
    }

    int16_t countLearnedIDs()
    {
        return protocolInfo.knowledgeSize;
    }

    int16_t count()
    {
        return protocolInfo.protocolSize;
    }
    int16_t countBlocks()
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK)
                counter++;
        }
        return counter;
    }
    int16_t countArrows()
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW)
                counter++;
        }
        return counter;
    }

    int16_t countLearned()
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].ID)
                counter++;
        }
        return counter;
    }
    int16_t countBlocksLearned()
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK && protocolPtr[i].ID)
                counter++;
        }
        return counter;
    }
    int16_t countArrowsLearned()
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW && protocolPtr[i].ID)
                counter++;
        }
        return counter;
    }

    int16_t count(int16_t ID)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].ID == ID)
                counter++;
        }
        return counter;
    }
    int16_t countBlocks(int16_t ID)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK && protocolPtr[i].ID == ID)
                counter++;
        }
        return counter;
    }
    int16_t countArrows(int16_t ID)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW && protocolPtr[i].ID == ID)
                counter++;
        }
        return counter;
    }

    Protocol_t *readProtocol(int16_t index)
    {
        if (index < count())
        {
            return protocolPtr + index;
        }
        return NULL;
    }
    Protocol_t *readBlockProtocol(int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }
    Protocol_t *readArrowProtocol(int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }

    Protocol_t *readLearnedProtocol(int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }
    Protocol_t *readBlockLearnedProtocol(int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK && protocolPtr[i].ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }
    Protocol_t *readArrowLearnedProtocol(int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW && protocolPtr[i].ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }

    Protocol_t *readByIDProtocol(int16_t ID, int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].ID == ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }
    Protocol_t *readBlockByIDProtocol(int16_t ID, int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_BLOCK && protocolPtr[i].ID == ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }
    Protocol_t *readArrowByIDProtocol(int16_t ID, int16_t index)
    {
        int16_t counter = 0;
        for (int i = 0; i < protocolInfo.protocolSize; i++)
        {
            if (protocolPtr[i].command == COMMAND_RETURN_ARROW && protocolPtr[i].ID == ID)
                if (index == counter++)
                    return protocolPtr + i;
        }
        return NULL;
    }

    HUSKYLENSResult read(int ID = 1, int index = 0)
    {
        Protocol_t *protocol = readByIDProtocol(ID, index);
        return protocol ? *protocol : resultDefault;
    }
    HUSKYLENSResult readDirect(int index)
    {
        Protocol_t *protocol = readProtocol(index);
        return protocol ? *protocol : resultDefault;
    }

    bool writeAlgorithm(protocolAlgorithm algorithmType)
    {
        Protocol_t protocol;
        protocol.algorithmType = algorithmType;
        protocolWriteRequestAlgorithm(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    bool writeOSD(const String &text, int x, int y)
    {
        Protocol_t protocol;
        uint8_t textLength = text.length();
        uint8_t data[textLength + 5] = {textLength, 0, x, y};
        if (x > 255)
        {
            data[1] = 0xff;
            data[2] = x % 256;
        }
        text.toCharArray((char *)data + 4, textLength + 1);
        protocol.length = textLength + 4;
        protocol.data = data;
        protocolWriteRequestCustomText(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    bool clearOSD()
    {
        protocolWriteRequestClearText();
        return wait(COMMAND_RETURN_OK);
    }

    bool writeName(const String &name, uint8_t id)
    {
        Protocol_t protocol;
        uint8_t nameLength = name.length();
        uint8_t data[nameLength + 3] = {id, (nameLength + 1) * 2};
        name.toCharArray((char *)data + 2, nameLength + 1);
        protocol.length = nameLength + 3;
        protocol.data = data;
        protocolWriteRequestName(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    bool takePhotoToSDCard()
    {
        protocolWriteRequestTakePhotoToSDCard();
        return wait(COMMAND_RETURN_OK);
    }

    bool screenshotToSDCard()
    {
        protocolWriteRequestScreenshotToSDCard();
        return wait(COMMAND_RETURN_OK);
    }

    bool learnOnece(uint16_t id)
    {
        uint8_t data[] = {id & 0xff, (id >> 8) & 0xff};
        Protocol_t protocol;
        protocol.length = 2;
        protocol.data = data;
        protocolWriteRequestLearnOnece(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    bool forgetLearn()
    {
        protocolWriteRequestForgetLearn();
        return wait(COMMAND_RETURN_OK);
    }

    bool saveModelToTFCard(uint16_t index)
    {
        uint8_t data[] = {index & 0xff, (index >> 8) & 0xff};
        Protocol_t protocol;
        protocol.length = 2;
        protocol.data = data;
        protocolWriteRequestSaveModelToTFCard(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    bool loadModelFromTFCard(uint16_t index)
    {
        uint8_t data[] = {index & 0xff, (index >> 8) & 0xff};
        Protocol_t protocol;
        protocol.length = 2;
        protocol.data = data;
        protocolWriteRequestLoadModelFromTFCard(protocol);
        return wait(COMMAND_RETURN_OK);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    void protocolWriteCommand(Protocol_t &protocol, uint8_t command)
    {
        protocol.command = command;
        uint8_t *buffer = husky_lens_protocol_write_begin(protocol.command);
        int length = husky_lens_protocol_write_end();
        protocolWrite(buffer, length);
    }

    bool protocolReadCommand(Protocol_t &protocol, uint8_t command)
    {
        if (husky_lens_protocol_read_begin(command))
        {
            protocol.command = command;
            husky_lens_protocol_read_end();
            return true;
        }
        else
        {
            return false;
        }
    }

    void protocolWriteFiveInt16(Protocol_t &protocol, uint8_t command)
    {
        protocol.command = command;
        uint8_t *buffer = husky_lens_protocol_write_begin(protocol.command);
        husky_lens_protocol_write_int16(protocol.first);
        husky_lens_protocol_write_int16(protocol.second);
        husky_lens_protocol_write_int16(protocol.third);
        husky_lens_protocol_write_int16(protocol.fourth);
        husky_lens_protocol_write_int16(protocol.fifth);
        int length = husky_lens_protocol_write_end();
        protocolWrite(buffer, length);
    }

    bool protocolReadFiveInt16(Protocol_t &protocol, uint8_t command)
    {
        if (husky_lens_protocol_read_begin(command))
        {
            protocol.command = command;
            protocol.first = husky_lens_protocol_read_int16();
            protocol.second = husky_lens_protocol_read_int16();
            protocol.third = husky_lens_protocol_read_int16();
            protocol.fourth = husky_lens_protocol_read_int16();
            protocol.fifth = husky_lens_protocol_read_int16();
            husky_lens_protocol_read_end();
            return true;
        }
        else
        {
            return false;
        }
    }

    void protocolWriteOneInt16(Protocol_t &protocol, uint8_t command)
    {
        protocol.command = command;
        uint8_t *buffer = husky_lens_protocol_write_begin(protocol.command);
        husky_lens_protocol_write_int16(protocol.first);
        int length = husky_lens_protocol_write_end();
        protocolWrite(buffer, length);
    }

    bool protocolReadOneInt16(Protocol_t &protocol, uint8_t command)
    {
        if (husky_lens_protocol_read_begin(command))
        {
            protocol.command = command;
            protocol.first = husky_lens_protocol_read_int16();
            husky_lens_protocol_read_end();
            return true;
        }
        else
        {
            return false;
        }
    }

    void protocolWriteBufferUint8(Protocol_t &protocol, uint8_t command)
    {
        protocol.command = command;
        uint8_t *buffer = husky_lens_protocol_write_begin(protocol.command);
        husky_lens_protocol_write_buffer_uint8(protocol.data, protocol.length);
        int length = husky_lens_protocol_write_end();
        //for(int i=0; i<length; i++){
        //    Serial.println(buffer[i], HEX);
        //}
        protocolWrite(buffer, length);
    }

    bool protocolReadBufferUint8(Protocol_t &protocol, uint8_t command)
    {
        if (husky_lens_protocol_read_begin(command))
        {
            protocol.command = command;
            protocol.length = husky_lens_protocol_read_buffer_uint8(protocol.data, protocol.length);
            husky_lens_protocol_read_end();
            return true;
        }
        else
        {
            return false;
        }
    }

#define PROTOCOL_CREATE(function, type, command)       \
    void protocolWrite##function(Protocol_t &protocol) \
    {                                                  \
        protocolWrite##type(protocol, command);        \
    }                                                  \
    void protocolWrite##function()                     \
    {                                                  \
        Protocol_t protocol;                           \
        protocolWrite##type(protocol, command);        \
    }                                                  \
    bool protocolRead##function(Protocol_t &protocol)  \
    {                                                  \
        return protocolRead##type(protocol, command);  \
    }                                                  \
    bool protocolRead##function()                      \
    {                                                  \
        Protocol_t protocol;                           \
        return protocolRead##type(protocol, command);  \
    }

    PROTOCOL_CREATE(Request, Command, COMMAND_REQUEST)
    PROTOCOL_CREATE(RequestBlocks, Command, COMMAND_REQUEST_BLOCKS)
    PROTOCOL_CREATE(RequestArrows, Command, COMMAND_REQUEST_ARROWS)
    PROTOCOL_CREATE(RequestLearned, Command, COMMAND_REQUEST_LEARNED)
    PROTOCOL_CREATE(RequestBlocksLearned, Command, COMMAND_REQUEST_BLOCKS_LEARNED)
    PROTOCOL_CREATE(RequestArrowsLearned, Command, COMMAND_REQUEST_ARROWS_LEARNED)
    PROTOCOL_CREATE(RequestKnock, Command, COMMAND_REQUEST_KNOCK)
    PROTOCOL_CREATE(ReturnOK, Command, COMMAND_RETURN_OK)
    PROTOCOL_CREATE(RequestClearText, Command, COMMAND_REQUEST_CLEAR_TEXT)
    PROTOCOL_CREATE(RequestTakePhotoToSDCard, Command, COMMAND_REQUEST_TAKE_PHOTO_TO_SD_CARD)
    PROTOCOL_CREATE(RequestScreenshotToSDCard, Command, COMMAND_REQUEST_SCREENSHOT_TO_SD_CARD)
    PROTOCOL_CREATE(RequestForgetLearn, Command, COMMAND_REQUEST_FORGET)
    PROTOCOL_CREATE(RequestSaveModelToTFCard, BufferUint8, COMMAND_REQUEST_SAVE_MODEL_TO_SD_CARD)
    PROTOCOL_CREATE(RequestLoadModelFromTFCard, BufferUint8, COMMAND_REQUEST_LOAD_MODEL_FROM_SD_CARD)

    PROTOCOL_CREATE(RequestByID, OneInt16, COMMAND_REQUEST_BY_ID)
    PROTOCOL_CREATE(RequestBlocksByID, OneInt16, COMMAND_REQUEST_BLOCKS_BY_ID)
    PROTOCOL_CREATE(RequestArrowsByID, OneInt16, COMMAND_REQUEST_ARROWS_BY_ID)
    PROTOCOL_CREATE(RequestAlgorithm, OneInt16, COMMAND_REQUEST_ALGORITHM)

    PROTOCOL_CREATE(ReturnInfo, FiveInt16, COMMAND_RETURN_INFO)
    PROTOCOL_CREATE(ReturnBlock, FiveInt16, COMMAND_RETURN_BLOCK)
    PROTOCOL_CREATE(ReturnArrow, FiveInt16, COMMAND_RETURN_ARROW)

    PROTOCOL_CREATE(RequestCustomText, BufferUint8, COMMAND_REQUEST_CUSTOM_TEXT)
    PROTOCOL_CREATE(RequestName, BufferUint8, COMMAND_REQUEST_NAME)
    PROTOCOL_CREATE(RequestLearnOnece, BufferUint8, COMMAND_REQUEST_LEARN_ONECE)
    PROTOCOL_CREATE(RequestFirmwareVersion, BufferUint8, COMMAND_REQUEST_FIRMWARE_VERSION)
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////
};

#endif
