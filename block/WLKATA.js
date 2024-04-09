'use strict';
goog.provide('Blockly.Blocks.WLKATA');
goog.require('Blockly.Blocks');


//导入库
Blockly.Blocks.WLKATA_include = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_INCLUDE)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//实例化Mirobot对象
Blockly.Blocks.WLKATA_object = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("address")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ADDRESS + '#');
        this.appendValueInput("address1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_BAUD + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//实例化Mirobot对象1
Blockly.Blocks.WLKATA_object1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField("UART")
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "mode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//获取机械臂Mirobot和分控板版本
Blockly.Blocks.WLKATA_version = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_VERSION);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
//等待机械臂Mirobot空闲
Blockly.Blocks.WLKATA_idle = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_IDLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//机械臂Mirobot地址
Blockly.Blocks.WLKATA_address = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("address")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ADDRESS + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 穿透执行Mirobot
Blockly.Blocks.WLKATA_penetrate = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_RESPONSE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_OPEN, "1"]]), "mode");
        this.appendValueInput('penetrate')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_PENETRATE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot复位
Blockly.Blocks.WLKATA_reset = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1-6", "8"], ["1-7", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "resets")
            .appendField(Blockly.MIXLY_WLKATA_RESET);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 机械臂Mirobot重启
Blockly.Blocks.WLKATA_zero1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_ZERO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


// 机械臂Mirobot回零点
Blockly.Blocks.WLKATA_ZEROING = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_ZEROING);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// TF离线执行Mirobot
Blockly.Blocks.WLKATA_TFexecute = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput('TFexecute')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_FILE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_WHILE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_NO, "false"], [Blockly.MIXLY_WLKATA_YES, "true"]]), "mode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 机械臂Mirobot位置运动
Blockly.Blocks.WLKATA_position = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("position1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)

            .appendField("X");
        this.appendValueInput("position2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("position3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("position4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A");
        this.appendValueInput("position5")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B");
        this.appendValueInput("position6")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("C");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot位置运动
Blockly.Blocks.WLKATA_position1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("position1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("position2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("position3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("position4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A");
        this.appendValueInput("position5")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B");
        this.appendValueInput("position6")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("C");
        this.appendValueInput("position7")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("D");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot位置运动
Blockly.Blocks.WLKATA_interpolation = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("position1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("position2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("position3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("position4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot圆弧插补运动
Blockly.Blocks.WLKATA_interpolation = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CW, "CW"], [Blockly.MIXLY_WLKATA_CCW, "CCW"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("interpolation1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("interpolation2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("interpolation3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("interpolation4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("R");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot关节运动
Blockly.Blocks.WLKATA_joint = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("joint1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("1");
        this.appendValueInput("joint2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("2");
        this.appendValueInput("joint3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("3");
        this.appendValueInput("joint4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("4");
        this.appendValueInput("joint5")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("5");
        this.appendValueInput("joint6")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("6");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot运动速度
Blockly.Blocks.WLKATA_seep = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("seep")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_SPEED + '(0~100)');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot停止运动
Blockly.Blocks.WLKATA_cease = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_PAUSE, "Pause"], [Blockly.MIXLY_WLKATA_CONTINUE, "Continue"], [Blockly.MIXLY_WLKATA_STOP, "Stop"]]), "claw2");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTION);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot第7轴
Blockly.Blocks.WLKATA_axle7 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("axle7")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_AXLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot第7轴运动距离
Blockly.Blocks.WLKATA_axle7_distance = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE7)
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("axle7_distance")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MOVE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_DISTANCE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot第7轴运动脉冲
Blockly.Blocks.WLKATA_axle7_pulse = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE7)
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("axle7_pulse")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MOVE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PULSE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 电动夹爪控制Mirobot
Blockly.Blocks.WLKATA_claw = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_CLAW)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "true"], [Blockly.MIXLY_WLKATA_CLOSE, "false"]]), "claw");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 吸盘控制Mirobot
Blockly.Blocks.WLKATA_pump1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PUMP1)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_PUMP1_ON, "1"]]), "pump1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 三指柔爪控制Mirobot
Blockly.Blocks.WLKATA_pump = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PUMP)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_ABSORB, "1"], [Blockly.MIXLY_WLKATA_BLOW, "2"]]), "pump");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//机械臂MirobotPWM
Blockly.Blocks.WLKATA_PWM = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("PWM")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_PWM + "#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 获取机械臂Mirobot状态
Blockly.Blocks.WLKATA_state = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STATE);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 获取机械臂Mirobot状态1
Blockly.Blocks.WLKATA_state1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STATE + '=');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_MINI_ALARM, "Alarm"],
            [Blockly.MIXLY_WLKATA_MINI_IDLE, "Idle"],
            [Blockly.MIXLY_WLKATA_MINI_RUN, "Run"],
            [Blockly.MIXLY_WLKATA_MINI_OFFLINE, "Offline"],
            [Blockly.MIXLY_WLKATA_MINI_HOME, "Home"],
            [Blockly.MIXLY_WLKATA_MINI_HOLD, "Hold"],
            [Blockly.MIXLY_WLKATA_MINI_BUSY, "Busy"]
            ]), "mode");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂Mirobot数据存入结果
Blockly.Blocks.WLKATA_getStatus0 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS4)
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS5);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 获取机械臂运动模式
Blockly.Blocks.WLKATA_getStatus1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS6)
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 获取机械臂pwm
Blockly.Blocks.WLKATA_getStatus2 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS6)
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS7);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 获取机械臂坐标
Blockly.Blocks.WLKATA_getStatus3 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS6)
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['X', "0"],['Y', "1"],['Z', "2"],['RX', "3"],['RY', "4"],['RZ', "5"],['J7', "6"]]), "mode");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS8);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 获取机械臂角度
Blockly.Blocks.WLKATA_getStatus4 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS6)
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['J1', "0"],
            ['J2', "1"],
            ['J3', "2"],
            ['J4', "3"],
            ['J5', "4"],
            ['J6', "5"]
            ]), "mode");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_GETSTATUS9);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 设置开启串口监视
Blockly.Blocks.WLKATA_monitor = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MONITOR)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "1"], [Blockly.MIXLY_WLKATA_CLOSE, "0"]]), "mode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//应答超时
Blockly.Blocks.WLKATA_timeout = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('mirobot1'), 'VAR');
        this.appendValueInput("timeout")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_DELAY);
        this.appendValueInput("timeout1")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_DELAY_RESPONSE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_FUNCTION)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


//实例化E4对象
Blockly.Blocks.E4_object = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput("address")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ADDRESS + '#');
        this.appendValueInput("address1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_BAUD + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//实例化E4对象1
Blockly.Blocks.E4_object1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField("UART")
            .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"]]), "mode");
        // this.appendValueInput("address3")
        //     .setCheck(Number)
        //     .setAlign(Blockly.ALIGN_RIGHT)
        //     .appendField(Blockly.MIXLY_WLKATA_BAUD + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//获取机械臂E4和分控板版本
Blockly.Blocks.E4_version = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_VERSION);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
//等待机械臂E4空闲
Blockly.Blocks.E4_idle = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_IDLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//机械臂E4地址
Blockly.Blocks.E4_address = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput("address")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ADDRESS + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 穿透执行E4
Blockly.Blocks.E4_penetrate = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_RESPONSE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_OPEN, "1"]]), "mode");
        this.appendValueInput('penetrate')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_PENETRATE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4复位
Blockly.Blocks.E4_reset = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["1-4", "8"], ["1-5", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "resets")
            .appendField(Blockly.MIXLY_WLKATA_RESET);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 机械臂E4重启
Blockly.Blocks.E4_zero1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_ZERO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


// 机械臂E4回零点
Blockly.Blocks.E4_ZEROING = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_ZEROING);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// TF离线执行E4
Blockly.Blocks.E4_TFexecute = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput('TFexecute')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_FILE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_WHILE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_NO, "false"], [Blockly.MIXLY_WLKATA_YES, "true"]]), "mode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 机械臂E4位置运动
Blockly.Blocks.E4_position = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("position1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("position2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("position3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("position4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4位置运动
Blockly.Blocks.E4_position1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("position1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("position2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("position3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("position4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A");
        this.appendValueInput("position7")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("D");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// // 机械臂E4位置运动
// Blockly.Blocks.E4_interpolation = {
//     init: function () {
//         this.setColour('#EAA20A');
//         this.appendDummyInput()
//             .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
//             .appendField(new Blockly.FieldTextInput('E4'), 'VAR')
//             .appendField(Blockly.MIXLY_WLKATA_SPEED1);
//         this.appendDummyInput()
//             .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
//             .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_POINT_TO_POINT, "MOVEP"], [Blockly.MIXLY_WLKATA_MOVEL, "MOVEL"], [Blockly.MIXLY_WLKATA_JUMP, "JUMP"]]), "claw1");
//         this.appendDummyInput()
//             .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
//             .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
//         this.appendValueInput("position1")
//             .setCheck(Number)
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("X");
//         this.appendValueInput("position2")
//             .setCheck(Number)
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Y");
//         this.appendValueInput("position3")
//             .setCheck(Number)
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("Z");
//         this.appendValueInput("position4")
//             .setCheck(Number)
//             .setAlign(Blockly.ALIGN_RIGHT)
//             .appendField("A");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
//     }
// }

// 机械臂E4弧插补运动
Blockly.Blocks.E4_interpolation = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CW, "CW"], [Blockly.MIXLY_WLKATA_CCW, "CCW"]]), "claw1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("interpolation1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("X");
        this.appendValueInput("interpolation2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Y");
        this.appendValueInput("interpolation3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Z");
        this.appendValueInput("interpolation4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("R");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4关节运动
Blockly.Blocks.E4_joint = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_SPEED1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTIONMODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2")
        this.appendValueInput("joint1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("1");
        this.appendValueInput("joint2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("2");
        this.appendValueInput("joint3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("3");
        this.appendValueInput("joint4")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("4");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4运动速度
Blockly.Blocks.E4_seep = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput("seep")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_SPEED + '(0~100)');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4停止运动
Blockly.Blocks.E4_cease = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_PAUSE, "Pause"], [Blockly.MIXLY_WLKATA_CONTINUE, "Continue"], [Blockly.MIXLY_WLKATA_STOP, "Stop"]]), "claw2");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MOTION);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4第7轴
Blockly.Blocks.E4_axle7 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput("axle7")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_AXLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4第7轴运动距离
Blockly.Blocks.E4_axle7_distance = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE7)
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("axle7_distance")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MOVE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_DISTANCE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 机械臂E4第7轴运动脉冲
Blockly.Blocks.E4_axle7_pulse = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE7)
            .appendField(Blockly.MIXLY_WLKATA_PATH_MODE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ABS, "ABS"], [Blockly.MIXLY_WLKATA_INC, "INC"]]), "claw2");
        this.appendValueInput("axle7_pulse")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MOVE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PULSE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 电动夹爪控制E4
Blockly.Blocks.E4_claw = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_CLAW)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "true"], [Blockly.MIXLY_WLKATA_CLOSE, "false"]]), "claw");

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 吸盘控制E4
Blockly.Blocks.E4_pump1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PUMP1)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_PUMP1_ON, "1"]]), "pump1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 三指柔爪E4控制
Blockly.Blocks.E4_pump = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_PUMP)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_ABSORB, "1"], [Blockly.MIXLY_WLKATA_BLOW, "2"]]), "pump");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//机械臂E4PWM
Blockly.Blocks.E4_PWM = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendValueInput("PWM")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_PWM + "#");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 获取机械臂E4状态
Blockly.Blocks.E4_state = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STATE);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 获取机械臂E4状态1
Blockly.Blocks.E4_state1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MIROBOT)
            .appendField(new Blockly.FieldTextInput('E4_1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STATE + '=');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_MINI_ALARM, "Alarm"],
            [Blockly.MIXLY_WLKATA_MINI_IDLE, "Idle"],
            [Blockly.MIXLY_WLKATA_MINI_RUN, "Run"],
            [Blockly.MIXLY_WLKATA_MINI_OFFLINE, "Offline"],
            [Blockly.MIXLY_WLKATA_MINI_HOME, "Home"],
            [Blockly.MIXLY_WLKATA_MINI_HOLD, "Hold"],
            [Blockly.MIXLY_WLKATA_MINI_BUSY, "Busy"]
            ]), "mode");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//实例化步进电机对象
Blockly.Blocks.WLKATA_Stepping = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//步进电机地址
Blockly.Blocks.WLKATA_Stepping_address = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.appendValueInput("address")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ADDRESS + '#');
        this.appendValueInput("address1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_BAUD + '#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
//等待步进电机空闲
Blockly.Blocks.WLKATA_Stepping_idle = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_IDLE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 步进电机穿透指令
Blockly.Blocks.WLKATA_Stepping_penetrate = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR')
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_RESPONSE)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_CLOSE, "0"], [Blockly.MIXLY_WLKATA_OPEN, "1"]]), "mode");
        this.appendValueInput('penetrate')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_PENETRATE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 步进电机重启
Blockly.Blocks.WLKATA_Stepping_reset = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            // .appendField(Blockly.MIXLY_WLKATA_FEEDING)
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR')
        this.appendDummyInput()
            // .appendField(Blockly.MIXLY_WLKATA_RESET);
            .appendField(Blockly.MIXLY_WLKATA_ZERO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//送料机回零
Blockly.Blocks.WLKATA_zero = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_FEEDING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR')
            .appendField(Blockly.MIXLY_WLKATA_ZERO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//步进电机速度
Blockly.Blocks.WLKATA_speed = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.appendValueInput("speed")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_SPEED1)
            .appendField(Blockly.MIXLY_WLKATA_SPEED + '(-100~100)#');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//送料机绝对位置
Blockly.Blocks.WLKATA_absolute = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_FEEDING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR')
        this.appendValueInput("speed")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_SPEED + '(0~50)#');
        this.appendValueInput("absolute")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ABSOLUTE);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 获取回料机状态
Blockly.Blocks.WLKATA_Stepping_state = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STATE);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 步进电机设置开启串口监视
Blockly.Blocks.WLKATA_Stepping_monitor = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            // .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MONITOR)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "1"], [Blockly.MIXLY_WLKATA_CLOSE, "0"]]), "mode");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//步进电机应答超时
Blockly.Blocks.WLKATA_Stepping_timeout = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_STEPPING, "1"], [Blockly.MIXLY_WLKATA_FEEDING, "0"]]), "mode")
            // .appendField(Blockly.MIXLY_WLKATA_STEPPING)
            .appendField(new Blockly.FieldTextInput('stepping1'), 'VAR');
        this.appendValueInput("timeout")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_DELAY);
        this.appendValueInput("timeout1")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_DELAY_RESPONSE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_FUNCTION)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


//板载传感器初始化
Blockly.Blocks.WLKATA_Onboard = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_ONDOARD)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 板载蜂鸣器控制1
Blockly.Blocks.WLKATA_buzzer1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BUZZER)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "1"], [Blockly.MIXLY_WLKATA_CLOSE, "0"]]), "buzzer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 板载蜂鸣器控制
Blockly.Blocks.WLKATA_buzzer = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BUZZER)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_SOUND)
            .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"]]), "buzzer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 板载RGB控制
Blockly.Blocks.WLKATA_RGB = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_LED)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_RGB)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_WHITE, "RGB_WHITE"], [Blockly.MIXLY_WLKATA_RED, "RGB_RED"], [Blockly.MIXLY_WLKATA_GREEN, "RGB_GREEN"], [Blockly.MIXLY_WLKATA_BLUE, "RGB_BLUE"], [Blockly.MIXLY_WLKATA_YELLOW, "RGB_YELLOW"], [Blockly.MIXLY_WLKATA_VIOLET, "RGB_VIOLET"], [Blockly.MIXLY_WLKATA_BLACK, "RGB_BLACK"]]), "buzzer");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 板载按键控制
Blockly.Blocks.WLKATA_Onboard = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_ONBOARD)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ONBOARD2, "3"], [Blockly.MIXLY_WLKATA_ONBOARD1, "2"]]), "buzzer");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ONBOARD3, "0"], [Blockly.MIXLY_WLKATA_ONBOARD4, "1"]]), "buzzer1");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 2560重启
Blockly.Blocks.WLKATA_restart = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField('2560')
            .appendField(Blockly.MIXLY_WLKATA_ZERO);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// GY33亮度设置
Blockly.Blocks.WLKATA_gy33_brightness = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BRIGHTNESS);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["UART2", "Serial2"], ["UART3", "Serial3"]]), "buzzer");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BRIGHTNESS1)
            .appendField(new Blockly.FieldDropdown([["0", "0"]
                , ["1", "1"]
                , ["2", "2"]
                , ["3", "3"]
                , ["4", "4"]
                , ["5", "5"]
                , ["6", "6"]
                , ["7", "7"]
                , ["8", "8"]
                , ["9", "9"]
                , ["10", "10"]]), "buzzer1");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// GY33颜色
Blockly.Blocks.WLKATA_gy33_colour = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BRIGHTNESS);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_COLOUR)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_RED, "0"]
                , [Blockly.MIXLY_WLKATA_YELLOW, "1"]
                , [Blockly.MIXLY_WLKATA_PINK, "2"]
                , [Blockly.MIXLY_WLKATA_WHITE, "3"]
                , [Blockly.MIXLY_WLKATA_BLACK, "4"]
                , [Blockly.MIXLY_WLKATA_GREEN, "5"]
                , [Blockly.MIXLY_WLKATA_DARKBLUE, "6"]
                , [Blockly.MIXLY_WLKATA_BLUE, "7"]
                , [Blockly.MIXLY_WLKATA_RGB1, "-1"]]), "buzzer");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


// 初始化二哈传感器
Blockly.Blocks.WLKATA_HuskyLens = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_INITIALIZATION);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


// 二哈传感器切换算法直到成功
Blockly.Blocks.WLKATA_algorithm = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_SWITCH);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_FACE_RECOGNITION, "1"], [Blockly.MIXLY_WLKATA_OBJECT_TRACKING, "2"], [Blockly.MIXLY_WLKATA_OBJECT_RECOGNITION, "3"], [Blockly.MIXLY_WLKATA_LINE_FOLLOWING, "4"], [Blockly.MIXLY_WLKATA_COLOR_RECOGNITION, "5"], [Blockly.MIXLY_WLKATA_TAG_IDENTIFICATION, "6"], [Blockly.MIXLY_WLKATA_OBJECT_CLASSIFICATION, "7"]]), "algorithm")
            .appendField(Blockly.MIXLY_WLKATA_SUCCESS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//二哈传感器请求数据存入结果
Blockly.Blocks.WLKATA_result = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_REQUEST_DATA)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 从结果中获取已学ID总数
Blockly.Blocks.WLKATA_total = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL)
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 从结果中获取方框是否在画面中
Blockly.Blocks.WLKATA_frame = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "1"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_TOTAL2);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 从结果获取靠近中心方框的ID总数
Blockly.Blocks.WLKATA_obtain = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL3);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_AND);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ID, "ID"], [Blockly.MIXLY_WLKATA_x_STARTING_POINT, "xCenter"], [Blockly.MIXLY_WLKATA_y_STARTING_POINT, "yCenter"], [Blockly.MIXLY_WLKATA_x_STARTING_END, "width"], [Blockly.MIXLY_WLKATA_y_STARTING_END, "height"]]), "obtain")
            .appendField(Blockly.MIXLY_WLKATA_PARAMETER);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//从结果中获取ID是否学习
Blockly.Blocks.WLKATA_study = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL4)
        this.appendValueInput("study")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_STUDY);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//从结果中获取ID方框的参数X中心
Blockly.Blocks.WLKATA_id_parameter = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL4);
        this.appendValueInput("parameter")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_AND1);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_x_CENTER, "xCenter"], [Blockly.MIXLY_WLKATA_y_CENTER, "yCenter"], [Blockly.MIXLY_WLKATA_WIDTH, "width"], [Blockly.MIXLY_WLKATA_HEIGHT, "height"]]), "obtain");
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 从结果中获取方框总数
Blockly.Blocks.WLKATA_total1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL1);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_TOTAL5);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//从结果中获取第1个方框的ID参数
Blockly.Blocks.WLKATA_id_result = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL6);
        this.appendValueInput("result")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_INDIVIDUAL);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_AND);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_ID, "ID"], [Blockly.MIXLY_WLKATA_x_STARTING_POINT, "xOrigin"], [Blockly.MIXLY_WLKATA_y_STARTING_POINT, "yOrigin"], [Blockly.MIXLY_WLKATA_x_STARTING_END, "xTarget"], [Blockly.MIXLY_WLKATA_y_STARTING_END, "yTarget"]]), "obtain")
            .appendField(Blockly.MIXLY_WLKATA_PARAMETER);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}




// 从结果中获取ID方框总数
Blockly.Blocks.WLKATA_total2 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL4);
        this.appendValueInput("total2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_TOTAL5);
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//从结果中获取id1第1个方框的参数X中心点
Blockly.Blocks.WLKATA_id_result1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TOTAL4);
        this.appendValueInput("result")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_AUXILIARY);
        this.appendValueInput("result1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_INDIVIDUAL);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_BLOCK)
            // .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_BLOCK, "Block"], [Blockly.MIXLY_WLKATA_ARROW, "Arrow"]]), "frame")
            .appendField(Blockly.MIXLY_WLKATA_AND1);

        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_x_CENTER, "xCenter"], [Blockly.MIXLY_WLKATA_y_CENTER, "yCenter"], [Blockly.MIXLY_WLKATA_WIDTH, "width"], [Blockly.MIXLY_WLKATA_HEIGHT, "height"]]), "obtain")
        //     .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_x_STARTING_POINT, "xOrigin"], [Blockly.MIXLY_WLKATA_y_STARTING_POINT, "yOrigin"], [Blockly.MIXLY_WLKATA_x_STARTING_END, "xTarget"], [Blockly.MIXLY_WLKATA_y_STARTING_END, "yTarget"]]), "obtain");


        // var var_frame = this.getFieldValue('frame');
        // if (var_frame === "Block") {
        //     this.appendDummyInput()
        //         .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_x_CENTER, "xCenter"], [Blockly.MIXLY_WLKATA_y_CENTER, "yCenter"], [Blockly.MIXLY_WLKATA_WIDTH, "width"], [Blockly.MIXLY_WLKATA_HEIGHT, "height"]]), "obtain");
        // } else if (var_frame === "Arrow") {
        //     this.appendDummyInput()
        //         .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_x_STARTING_POINT, "xOrigin"], [Blockly.MIXLY_WLKATA_y_STARTING_POINT, "yOrigin"], [Blockly.MIXLY_WLKATA_x_STARTING_END, "xTarget"], [Blockly.MIXLY_WLKATA_y_STARTING_END, "yTarget"]]), "obtain");
        // }
        this.setOutput(true, Number);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}


// 自动学习一次ID
Blockly.Blocks.WLKATA_automatic = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_AUTOMATIC)
            .appendField(Blockly.MIXLY_WLKATA_ID);
        this.appendValueInput("automatic")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 遗忘当前算法的所有学习数据
Blockly.Blocks.WLKATA_forget = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_FORGET);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 自动学习一次ID
Blockly.Blocks.WLKATA_name = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_ALGORITHM)
        this.appendValueInput("name1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_ID);
        this.appendValueInput('name2')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_NAME);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 屏幕叠加显示文字在XY
Blockly.Blocks.WLKATA_screen = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_SCREEN)
        this.appendValueInput('name1')
            .setCheck([String, Number])
            .setAlign(Blockly.ALIGN_RIGHT)

        this.appendValueInput("name2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_IS_X);

        this.appendValueInput("name3")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_IS_Y);

        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 清除屏幕显示的文字
Blockly.Blocks.WLKATA_screen1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_SCREEN1)
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

// 触发拍照保存到SD卡
Blockly.Blocks.WLKATA_save_SD = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS)
            .appendField(Blockly.MIXLY_WLKATA_TRIGGER);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_PHOTOGRAPH, "takePhoto"], [Blockly.MIXLY_WLKATA_SCREENSHOT, "screenshot"]]), "algorithm");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_SAVE);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
// 触发拍照保存到SD卡
Blockly.Blocks.WLKATA_save_SD1 = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_HUSKYLENS);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_SAVE1, "saveModelTo"], [Blockly.MIXLY_WLKATA_LOADING, "loadModelFrom"]]), "algorithm");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_SAVE2);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['0', "0"], ['1', "1"], ['2', "2"], ['3', "3"], ['4', "4"]]), "algorithm1");
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_SAVE3);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}
//AGV小车前进后退左转右转
Blockly.Blocks.WLKATA_AGV_move = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_AGV)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_MINI_W, "w"], [Blockly.MIXLY_WLKATA_MINI_S, "s"], [Blockly.MIXLY_WLKATA_MINI_A, "a"], [Blockly.MIXLY_WLKATA_MINI_D, "d"], [Blockly.MIXLY_WLKATA_MINI_Q, "q"], [Blockly.MIXLY_WLKATA_MINI_E, "e"]]), "claw2");
        this.appendValueInput("AGV_move")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT);
        // .appendField(Blockly.MIXLY_WLKATA_MOVE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_MILL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//AGV小车巡线
Blockly.Blocks.WLKATA_AGV_patrol = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_AGV);
        this.appendValueInput("AGV_patrol")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MINI_T);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_MILL)
            .appendField(Blockly.MIXLY_WLKATA_MINI_DETECTION);
        this.appendValueInput("AGV_patrol2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_MINI_FINE);
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_MILL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//AGV小车左右巡线
Blockly.Blocks.WLKATA_AGV_qet = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_AGV)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_MINI_QT, "x"], [Blockly.MIXLY_WLKATA_MINI_ET, "c"]]), "claw2")
            .appendField(Blockly.MIXLY_WLKATA_MINI_DETECTION2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//AGV小车速度
Blockly.Blocks.WLKATA_AGV_speed = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_AGV);
        this.appendValueInput("AGV_speed")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_WLKATA_SPEED + '(0-200)');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}

//AGV小车风扇
Blockly.Blocks.WLKATA_AGV_feng = {
    init: function () {
        this.setColour('#EAA20A');
        this.appendDummyInput()
            .appendField(Blockly.MIXLY_WLKATA_MINI_AGV)
            .appendField(Blockly.MIXLY_WLKATA_MINI_FAN)
            .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_WLKATA_OPEN, "1"], [Blockly.MIXLY_WLKATA_CLOSE, "0"]]), "claw2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_WLKATA_INCLUDE_HELP);
    }
}