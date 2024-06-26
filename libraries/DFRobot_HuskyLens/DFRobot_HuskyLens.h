#include "HUSKYLENS.h"

#ifndef _HUSKYLENS_MIND_PLUS_H
#define _HUSKYLENS_MIND_PLUS_H

typedef struct HUSKYLENSBlockInfo_t
{
    int32_t xCenter;
    int32_t yCenter;
    int32_t width;
    int32_t height;
} HUSKYLENSBlockInfo;

typedef struct HUSKYLENSArrowInfo_t
{
    int32_t xOrigin;
    int32_t yOrigin;
    int32_t xTarget;
    int32_t yTarget;
} HUSKYLENSArrowInfo;

typedef struct HUSKYLENSBlockDirectInfo_t
{
    int32_t xCenter;
    int32_t yCenter;
    int32_t width;
    int32_t height;
    int32_t ID;
} HUSKYLENSBlockDirectInfo;

typedef struct HUSKYLENSArrowDirectInfo_t
{
    int32_t xOrigin;
    int32_t yOrigin;
    int32_t xTarget;
    int32_t yTarget;
    int32_t ID;
} HUSKYLENSArrowDirectInfo;

typedef enum HUSKYLENSResultType_t
{
    HUSKYLENSResultBlock,
    HUSKYLENSResultArrow,
} HUSKYLENSResultType;

class DFRobot_HuskyLens : public HUSKYLENS
{
private:
    bool isWire = false;

public:
    void beginI2CUntilSuccess()
    {
#if defined(NRF52833)      //解决麦昆V2 huskylens 同时上电启动后初始化不成功 wsq
        delay(800);
#endif
        Wire.begin();
        Wire.setClock(100000);
        while (!begin(Wire))
        {
            delay(100);
        }
        isWire = true;
    }

    void beginSoftwareSerialUntilSuccess(int RXPin, int TXPin)
    {
        static SoftwareSerial mySerial(RXPin, TXPin);
        mySerial.begin(9600);
        while (!begin(mySerial))
        {
            delay(100);
        }
        isWire = false;
    }

    bool writeAlgorithm(protocolAlgorithm algorithmType)
    {
        Wire.setClock(100000);
        return HUSKYLENS::writeAlgorithm(algorithmType);
    }

    bool request()
    {
        Wire.setClock(100000);
        return HUSKYLENS::request();
    }

    bool isAppearDirect(HUSKYLENSResultType type)
    {
        switch (type)
        {
        case HUSKYLENSResultBlock:
            return countBlocks();
        case HUSKYLENSResultArrow:
            return countArrows();
        default:
            return false;
        }
    }

    float readCount(int ID, HUSKYLENSResultType type)
    {
        switch (type)
        {
        case HUSKYLENSResultBlock:
            return countBlocks(ID);
        case HUSKYLENSResultArrow:
            return countArrows(ID);
        default:
            return -1.0f;
        }
    }

    bool writeOSD(const String &text, int x, int y)
    {
        Wire.setClock(100000);
        return HUSKYLENS::writeOSD(text, x, y);
    }

    bool clearOSD()
    {
        Wire.setClock(100000);
        return HUSKYLENS::clearOSD();
    }

    bool writeName(const String &name, uint8_t id)
    {
        Wire.setClock(100000);
        return HUSKYLENS::writeName(name, id);
    }

    bool takePhotoToSDCard()
    {
        Wire.setClock(100000);
        return HUSKYLENS::takePhotoToSDCard();
    }

    bool screenshotToSDCard()
    {
        Wire.setClock(100000);
        return HUSKYLENS::screenshotToSDCard();
    }

    bool learnOnece(uint16_t id)
    {
        Wire.setClock(100000);
        return HUSKYLENS::learnOnece(id);
    }

    bool forgetLearn()
    {
        Wire.setClock(100000);
        return HUSKYLENS::forgetLearn();
    }

    bool saveModelToTFCard(uint32_t index)
    {
        Wire.setClock(100000);
        return HUSKYLENS::saveModelToTFCard((uint16_t)index);
    }

    bool loadModelFromTFCard(uint32_t index)
    {
        Wire.setClock(100000);
        return HUSKYLENS::loadModelFromTFCard((uint16_t)index);
    }

    HUSKYLENSBlockDirectInfo readBlockCenterParameterDirect()
    {
        int32_t distanceMin = INT32_MAX;
        int16_t distanceMinIndex = -1;
        for (int i = 0; i < blocks.available(); i++)
        {
            HUSKYLENSResult resultBuffer = blocks.readDirect(i);
            int32_t distance = sq(resultBuffer.xCenter - 320 / 2) + sq(resultBuffer.yCenter - 240 / 2);
            if (distance < distanceMin)
            {
                distanceMin = distance;
                distanceMinIndex = i;
            }
        }

        HUSKYLENSResult result = blocks.readDirect(distanceMinIndex);
        HUSKYLENSBlockDirectInfo block;
        block.xCenter = result.xCenter;
        block.yCenter = result.yCenter;
        block.width = result.width;
        block.height = result.height;
        block.ID = result.ID;
        return block;
    }

    HUSKYLENSArrowDirectInfo readArrowCenterParameterDirect()
    {
        int32_t distanceMin = INT32_MAX;
        int16_t distanceMinIndex = -1;

        for (int i = 0; i < arrows.available(); i++)
        {
            HUSKYLENSResult resultBuffer = arrows.readDirect(i);
            int32_t distance = sq((resultBuffer.xOrigin + resultBuffer.xTarget) / 2 - 320 / 2) + sq((resultBuffer.yOrigin + resultBuffer.yTarget) / 2 - 240 / 2);
            if (distance < distanceMin)
            {
                distanceMin = distance;
                distanceMinIndex = i;
            }
        }

        HUSKYLENSResult result = arrows.readDirect(distanceMinIndex);
        HUSKYLENSArrowDirectInfo arrow;
        arrow.xOrigin = result.xOrigin;
        arrow.yOrigin = result.yOrigin;
        arrow.xTarget = result.xTarget;
        arrow.yTarget = result.yTarget;
        arrow.ID = result.ID;
        return arrow;
    }

    bool isAppear(int ID, HUSKYLENSResultType type)
    {
        switch (type)
        {
        case HUSKYLENSResultBlock:
            return countBlocks(ID);
        case HUSKYLENSResultArrow:
            return countArrows(ID);
        default:
            return false;
        }
    }

    HUSKYLENSBlockInfo readBlockParameter(int ID, int index = 1)
    {
        HUSKYLENSResult result = blocks.read(ID, index - 1);
        HUSKYLENSBlockInfo block;
        block.xCenter = result.xCenter;
        block.yCenter = result.yCenter;
        block.width = result.width;
        block.height = result.height;
        return block;
    }

    HUSKYLENSArrowInfo readArrowParameter(int ID, int index = 1)
    {
        HUSKYLENSResult result = arrows.read(ID, index - 1);
        HUSKYLENSArrowInfo arrow;
        arrow.xOrigin = result.xOrigin;
        arrow.yOrigin = result.yOrigin;
        arrow.xTarget = result.xTarget;
        arrow.yTarget = result.yTarget;
        return arrow;
    }

    float readLearnedIDCount()
    {
        return countLearnedIDs();
    }

    float readCount(HUSKYLENSResultType type)
    {
        switch (type)
        {
        case HUSKYLENSResultBlock:
            return countBlocks();
        case HUSKYLENSResultArrow:
            return countArrows();
        default:
            return -1.0f;
        }
    }

    HUSKYLENSBlockDirectInfo readBlockParameterDirect(int index)
    {
        HUSKYLENSResult result = blocks.readDirect(index - 1);
        HUSKYLENSBlockDirectInfo block;
        block.xCenter = result.xCenter;
        block.yCenter = result.yCenter;
        block.width = result.width;
        block.height = result.height;
        block.ID = result.ID;
        return block;
    }

    HUSKYLENSArrowDirectInfo readArrowParameterDirect(int index)
    {
        HUSKYLENSResult result = arrows.readDirect(index - 1);
        HUSKYLENSArrowDirectInfo arrow;
        arrow.xOrigin = result.xOrigin;
        arrow.yOrigin = result.yOrigin;
        arrow.xTarget = result.xTarget;
        arrow.yTarget = result.yTarget;
        arrow.ID = result.ID;
        return arrow;
    }
};

#endif