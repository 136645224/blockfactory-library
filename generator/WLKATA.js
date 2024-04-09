'use strict';
goog.provide('Blockly.Arduino.WLKATA');//注意脚本类别及路径名称
goog.require('Blockly.Arduino');


//导入库
Blockly.Arduino.WLKATA_include = function () {
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    return '';
};

//实例化对象
Blockly.Arduino.WLKATA_object = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var steps1 = Blockly.Arduino.valueToCode(this, 'address1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['var_declare_Mirobot_UART' + varName] = 'Mirobot_UART ' + varName + ';';
    Blockly.Arduino.setups_['setup_WLKATA_uart' ] = 'RS485.begin('+ steps1+ ');';
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};

//实例化对象1
Blockly.Arduino.WLKATA_object1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var steps3 = Blockly.Arduino.valueToCode(this, 'address3', Blockly.Arduino.ORDER_ATOMIC);
    
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.definitions_['var_declare_Mirobot_UART' + varName] = 'RS485AssicMaster uart' + penetrate_mode +'(&Serial'+penetrate_mode +');';
    Blockly.Arduino.definitions_['var_declare_Mirobot_UART1'+ penetrate_mode ] = 'Mirobot_UART ' + varName +'(&uart'+penetrate_mode +');';
    Blockly.Arduino.setups_['setup_WLKATA_uart'] = 'uart'+penetrate_mode+ '.begin(115200);';
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(-1);';
    return '';
};

//等待机械臂空闲
Blockly.Arduino.WLKATA_idle = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.waitIdle();\r\n';
    return code;
};

//机械臂地址
Blockly.Arduino.WLKATA_address = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};

// 获取机械臂和分控板版本
Blockly.Arduino.WLKATA_version = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.getVersions()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 穿透执行
Blockly.Arduino.WLKATA_penetrate = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var steps = Blockly.Arduino.valueToCode(this, 'penetrate', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.sendMsg(' + steps + ',' + penetrate_mode + ');\r\n'
    return code;
};

// 机械臂复位
Blockly.Arduino.WLKATA_reset = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_resets = this.getFieldValue('resets');
    var code = varName + '.homing(' + var_resets + ');\r\n'
    return code;
};

// 机械臂重启
Blockly.Arduino.WLKATA_zero1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.reset();\r\n'
    return code;
};

// 机械臂回零点
Blockly.Arduino.WLKATA_ZEROING = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.zero();\r\n'
    return code;
};
// TF离线执行
Blockly.Arduino.WLKATA_TFexecute = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'TFexecute', Blockly.Arduino.ORDER_ATOMIC);
    var var_claw1 = this.getFieldValue('mode');
    var code = varName + '.runFile(' + steps + ',' + var_claw1 + ');\r\n'
    return code;
};

// 机械臂位置运动
Blockly.Arduino.WLKATA_position = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'position1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'position2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'position3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'position4', Blockly.Arduino.ORDER_ATOMIC);
    var var_position5 = Blockly.Arduino.valueToCode(this, 'position5', Blockly.Arduino.ORDER_ATOMIC);
    var var_position6 = Blockly.Arduino.valueToCode(this, 'position6', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.movePose(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ',' + var_position5 + ',' + var_position6 + ');\r\n';
    return code;
};

// 机械臂位置运动1
Blockly.Arduino.WLKATA_position1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'position1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'position2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'position3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'position4', Blockly.Arduino.ORDER_ATOMIC);
    var var_position5 = Blockly.Arduino.valueToCode(this, 'position5', Blockly.Arduino.ORDER_ATOMIC);
    var var_position6 = Blockly.Arduino.valueToCode(this, 'position6', Blockly.Arduino.ORDER_ATOMIC);
    var var_position7 = Blockly.Arduino.valueToCode(this, 'position7', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.movePoseWithExj(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ',' + var_position5 + ',' + var_position6 + ',' + var_position7 + ');\r\n';
    return code;
};

// 机械臂圆弧插补运动
Blockly.Arduino.WLKATA_interpolation = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'interpolation1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'interpolation2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'interpolation3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'interpolation4', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveArc(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ');\r\n';
    return code;
};

// 机械臂圆机械臂关节运动
Blockly.Arduino.WLKATA_joint = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'joint1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'joint2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'joint3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'joint4', Blockly.Arduino.ORDER_ATOMIC);
    var var_position5 = Blockly.Arduino.valueToCode(this, 'joint5', Blockly.Arduino.ORDER_ATOMIC);
    var var_position6 = Blockly.Arduino.valueToCode(this, 'joint6', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveJoints(' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ',' + var_position5 + ',' + var_position6 + ');\r\n';
    return code;
};

// 机械臂运动速度
Blockly.Arduino.WLKATA_seep = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_seep = Blockly.Arduino.valueToCode(this, 'seep', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_seep' + varName] =  varName + '.motionSpeedRatio(' + var_seep + ');\r\n';
    // var code = varName + '.motionSpeedRatio(' + var_seep + ');\r\n';
    return '';
};

// 机械臂停止运动
Blockly.Arduino.WLKATA_cease = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw2 = this.getFieldValue('claw2');
    var code = varName + '.move' + var_claw2 + '();\r\n';
    return code;
};

// 机械臂第7轴
Blockly.Arduino.WLKATA_axle7 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_axle7 = Blockly.Arduino.valueToCode(this, 'axle7', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_axle7' + varName] = varName + '.setExjRatio(' + var_axle7 + ');\r\n';
    return '';
};

// 机械臂第7轴运动距离
Blockly.Arduino.WLKATA_axle7_pulse = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw2');
    var var_axle7_pulse = Blockly.Arduino.valueToCode(this, 'axle7_pulse', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveExjPulse(' + var_claw1 + ',' + var_axle7_pulse + ');\r\n';
    return code;
};

// 机械臂第7轴运动脉冲
Blockly.Arduino.WLKATA_axle7_distance = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw2');
    var var_axle7_distance = Blockly.Arduino.valueToCode(this, 'axle7_distance', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveExjDist(' + var_claw1 + ',' + var_axle7_distance + ');\r\n';
    return code;
};

// 电动夹爪控制
Blockly.Arduino.WLKATA_claw = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw = this.getFieldValue('claw');
    var code = varName + '.setEndtGripper(' + var_claw + ');\r\n'
    return code;
};
// 吸盘控制
Blockly.Arduino.WLKATA_pump1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_pump = this.getFieldValue('pump1');
    var code = varName + '.setEndtPump(' + var_pump + ');\r\n'
    return code;
};

// 三指柔爪控制
Blockly.Arduino.WLKATA_pump = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_pump = this.getFieldValue('pump');
    var code = varName + '.setEndtPump(' + var_pump + ');\r\n'
    return code;
};

//机械臂PWM
Blockly.Arduino.WLKATA_PWM = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_PWM = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.setEndtPwm(' + var_PWM + ');\r\n'
    return code;
};

// 获取机械臂状态
Blockly.Arduino.WLKATA_state = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.getState()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取机械臂状态1
Blockly.Arduino.WLKATA_state1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    if (penetrate_mode=='Offline'){
        var code = varName + '.getState()==0'
    }
    else if (penetrate_mode=='Idle') {
        var code = varName + '.getState()==1'
    }
    else if (penetrate_mode=='Alarm') {
        var code = varName + '.getState()==2'
    }
    else if (penetrate_mode=='Home') {
        var code = varName + '.getState()==3'
    }
    else if (penetrate_mode=='Run') {
        var code = varName + '.getState()==4'
    }
    else if (penetrate_mode=='Hold') {
        var code = varName + '.getState()==5'
    }
    else if (penetrate_mode=='Busy') {
        var code = varName + '.getState()==6'
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 机械臂Mirobot数据存入结果
Blockly.Arduino.WLKATA_getStatus0 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'STATUS_MIROBOT status_'+varName+'='+varName+'.getStatus();\r\n'
    return code;
};

// 获取机械臂运动模式
Blockly.Arduino.WLKATA_getStatus1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'status_'+varName + '.state'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取机械臂PWM
Blockly.Arduino.WLKATA_getStatus2 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = 'status_'+varName + '.pumpPwm'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取机械臂坐标
Blockly.Arduino.WLKATA_getStatus3 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var code = 'status_'+varName + '.cartesian['+penetrate_mode+']'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取机械臂角度
Blockly.Arduino.WLKATA_getStatus4 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var code = 'status_'+varName + '.angle['+penetrate_mode+']'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 设置开启串口监视
Blockly.Arduino.WLKATA_monitor = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    Blockly.Arduino.setups_['var_declare_Mirobot_monitor' + varName] = varName + '.setSerialMonitor(' + penetrate_mode + ',&Serial);'
    return '';
};

//应答超时
Blockly.Arduino.WLKATA_timeout = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // var var_error = Blockly.Arduino.variableDB_.getName(this.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var var_timeout = Blockly.Arduino.valueToCode(this, 'timeout', Blockly.Arduino.ORDER_ATOMIC);
    var var_timeout1 = Blockly.Arduino.valueToCode(this, 'timeout1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_timeout' + varName] = varName + '.setCallbackFunction(' + var_timeout + ',' + var_timeout1 + ');';
    return '';
};
//****************************************************************************************************
//实例化对象
Blockly.Arduino.E4_object = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var steps1 = Blockly.Arduino.valueToCode(this, 'address1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['var_declare_E4_UART' + varName] = 'E4_UART ' + varName + ';';
    Blockly.Arduino.setups_['setup_WLKATA_uart' ] = 'RS485.begin('+ steps1+ ');';
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};

//实例化对象1
Blockly.Arduino.E4_object1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var steps3 = Blockly.Arduino.valueToCode(this, 'address3', Blockly.Arduino.ORDER_ATOMIC);
    
    
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.definitions_['var_declare_Mirobot_UART' + varName] = 'RS485AssicMaster uart' + penetrate_mode +'(&Serial'+penetrate_mode +');';
    Blockly.Arduino.definitions_['var_declare_Mirobot_UART1'+ penetrate_mode ] = 'Mirobot_UART ' + varName +'(&uart'+penetrate_mode +');';
    Blockly.Arduino.setups_['setup_WLKATA_uart'] = 'uart'+penetrate_mode+ '.begin(115200);';
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(-1);';
    return '';
};

//等待机械臂空闲
Blockly.Arduino.E4_idle = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.waitIdle();\r\n';
    return code;
};

//机械臂地址
Blockly.Arduino.E4_address = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};

// 获取机械臂和分控板版本
Blockly.Arduino.E4_version = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.getVersions()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 穿透执行
Blockly.Arduino.E4_penetrate = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var steps = Blockly.Arduino.valueToCode(this, 'penetrate', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.sendMsg(' + steps + ',' + penetrate_mode + ');\r\n'
    return code;
};

// 机械臂复位
Blockly.Arduino.E4_reset = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_resets = this.getFieldValue('resets');
    var code = varName + '.homing(' + var_resets + ');\r\n'
    return code;
};

// 机械臂重启
Blockly.Arduino.E4_zero1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.reset();\r\n'
    return code;
};

// 机械臂回零点
Blockly.Arduino.E4_ZEROING = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.zero();\r\n'
    return code;
};
// TF离线执行
Blockly.Arduino.E4_TFexecute = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'TFexecute', Blockly.Arduino.ORDER_ATOMIC);
    var var_claw1 = this.getFieldValue('mode');
    var code = varName + '.runFile(' + steps + ',' + var_claw1 + ');\r\n'
    return code;
};

// 机械臂位置运动
Blockly.Arduino.E4_position = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'position1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'position2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'position3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'position4', Blockly.Arduino.ORDER_ATOMIC);
   
    var code = varName + '.movePose(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4   + ');\r\n';
    return code;
};

// 机械臂位置运动1
Blockly.Arduino.E4_position1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'position1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'position2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'position3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'position4', Blockly.Arduino.ORDER_ATOMIC);
    var var_position7 = Blockly.Arduino.valueToCode(this, 'position7', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.movePoseWithExj(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ','  + var_position7 + ');\r\n';
    return code;
};

// 机械臂圆弧插补运动
Blockly.Arduino.E4_interpolation = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw1');
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'interpolation1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'interpolation2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'interpolation3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'interpolation4', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveArc(' + var_claw1 + ',' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ');\r\n';
    return code;
};

// 机械臂圆机械臂关节运动
Blockly.Arduino.E4_joint = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw2 = this.getFieldValue('claw2');
    var var_position1 = Blockly.Arduino.valueToCode(this, 'joint1', Blockly.Arduino.ORDER_ATOMIC);
    var var_position2 = Blockly.Arduino.valueToCode(this, 'joint2', Blockly.Arduino.ORDER_ATOMIC);
    var var_position3 = Blockly.Arduino.valueToCode(this, 'joint3', Blockly.Arduino.ORDER_ATOMIC);
    var var_position4 = Blockly.Arduino.valueToCode(this, 'joint4', Blockly.Arduino.ORDER_ATOMIC);
   
    var code = varName + '.moveJoints(' + var_claw2 + ',' + var_position1 + ',' + var_position2 + ',' + var_position3 + ',' + var_position4 + ',' + ');\r\n';
    return code;
};

// 机械臂运动速度
Blockly.Arduino.E4_seep = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_seep = Blockly.Arduino.valueToCode(this, 'seep', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_seep' + varName] =  varName + '.motionSpeedRatio(' + var_seep + ');\r\n';
    // var code = varName + '.motionSpeedRatio(' + var_seep + ');\r\n';
    return '';
};

// 机械臂停止运动
Blockly.Arduino.E4_cease = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw2 = this.getFieldValue('claw2');
    var code = varName + '.move' + var_claw2 + '();\r\n';
    return code;
};

// 机械臂第7轴
Blockly.Arduino.E4_axle7 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_axle7 = Blockly.Arduino.valueToCode(this, 'axle7', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_axle7' + varName] = varName + '.setExjRatio(' + var_axle7 + ');\r\n';
    return '';
};

// 机械臂第7轴运动距离
Blockly.Arduino.E4_axle7_pulse = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw2');
    var var_axle7_pulse = Blockly.Arduino.valueToCode(this, 'axle7_pulse', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveExjPulse(' + var_claw1 + ',' + var_axle7_pulse + ');\r\n';
    return code;
};

// 机械臂第7轴运动脉冲
Blockly.Arduino.E4_axle7_distance = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw1 = this.getFieldValue('claw2');
    var var_axle7_distance = Blockly.Arduino.valueToCode(this, 'axle7_distance', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveExjDist(' + var_claw1 + ',' + var_axle7_distance + ');\r\n';
    return code;
};

// 电动夹爪控制
Blockly.Arduino.E4_claw = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_claw = this.getFieldValue('claw');
    var code = varName + '.setEndtGripper(' + var_claw + ');\r\n'
    return code;
};
// 吸盘控制
Blockly.Arduino.E4_pump1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_pump = this.getFieldValue('pump1');
    var code = varName + '.setEndtPump(' + var_pump + ');\r\n'
    return code;
};

// 三指柔爪控制
Blockly.Arduino.E4_pump = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_pump = this.getFieldValue('pump');
    var code = varName + '.setEndtPump(' + var_pump + ');\r\n'
    return code;
};

//机械臂PWM
Blockly.Arduino.E4_PWM = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_PWM = Blockly.Arduino.valueToCode(this, 'PWM', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.setEndtPwm(' + var_PWM + ');\r\n'
    return code;
};

// 获取机械臂状态
Blockly.Arduino.E4_state = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.getState()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 获取机械臂状态1
Blockly.Arduino.E4_state1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    if (penetrate_mode=='Offline'){
        var code = varName + '.getState()==0'
    }
    else if (penetrate_mode=='Idle') {
        var code = varName + '.getState()==1'
    }
    else if (penetrate_mode=='Alarm') {
        var code = varName + '.getState()==2'
    }
    else if (penetrate_mode=='Home') {
        var code = varName + '.getState()==3'
    }
    else if (penetrate_mode=='Run') {
        var code = varName + '.getState()==4'
    }
    else if (penetrate_mode=='Hold') {
        var code = varName + '.getState()==5'
    }
    else if (penetrate_mode=='Busy') {
        var code = varName + '.getState()==6'
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//#####################################################################################################
//实例化步进电机对象
Blockly.Arduino.WLKATA_Stepping_address = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    var steps1 = Blockly.Arduino.valueToCode(this, 'address1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.definitions_['var_declare_MS4220_UART' + varName] = 'MS4220_UART ' + varName + ';';
    Blockly.Arduino.setups_['setup_WLKATA_uart' + varName] = 'RS485.begin(' + steps1 + ');';
    Blockly.Arduino.setups_['setup_WLKATA_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};


//步进电机地址
Blockly.Arduino.WLKATA_Stepping_address1 = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'address', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_Stepping_address' + varName] = varName + '.init(' + steps + ');';
    return '';
};
//等待步进电机空闲
Blockly.Arduino.WLKATA_Stepping_idle = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.waitIdle();\r\n';
    return code;
};

// 步进电机穿透执行
Blockly.Arduino.WLKATA_Stepping_penetrate = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    var steps = Blockly.Arduino.valueToCode(this, 'penetrate', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.sendMsg(' + steps + ',' + penetrate_mode + ');\r\n'
    return code;
};
// 获取步进电机状态
Blockly.Arduino.WLKATA_Stepping_state = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.getState()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
// 步进电机重启
Blockly.Arduino.WLKATA_Stepping_reset = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.reset();\r\n'
    return code;
};
//送料机重启
Blockly.Arduino.WLKATA_zero = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var code = varName + '.reset();\r\n';
    return code;
};

//步进电机速度
Blockly.Arduino.WLKATA_speed = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var steps = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.moveAlway(' + steps + ');\r\n';
    return code;
};

//送料机绝对位置
Blockly.Arduino.WLKATA_absolute = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var var_speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
    var var_absolute = Blockly.Arduino.valueToCode(this, 'absolute', Blockly.Arduino.ORDER_ATOMIC);
    var code = varName + '.setMovePos(' + var_absolute + ',' + var_speed + ');\r\n';
    return code;
};

// 设置开启步进电机串口监视
Blockly.Arduino.WLKATA_Stepping_monitor = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var penetrate_mode = this.getFieldValue('mode');
    Blockly.Arduino.setups_['var_declare_Mirobot_monitor' + varName] = varName + '.setSerialMonitor(' + penetrate_mode + ',&Serial);'
    return '';
};

//步进电机应答超时
Blockly.Arduino.WLKATA_Stepping_timeout = function () {
    var varName = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // var var_error = Blockly.Arduino.variableDB_.getName(this.getFieldValue('error'), Blockly.Variables.NAME_TYPE);
    var var_timeout = Blockly.Arduino.valueToCode(this, 'timeout', Blockly.Arduino.ORDER_ATOMIC);
    var var_timeout1 = Blockly.Arduino.valueToCode(this, 'timeout1', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_timeout' + varName] = varName + '.setCallbackFunction(' + var_timeout + ',' + var_timeout1 + ');';
    return '';
};
//#####################################################################################################
//板载传感器初始化
Blockly.Arduino.WLKATA_Onboard = function () {
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    return '';
};

//板载蜂鸣器控制
Blockly.Arduino.WLKATA_buzzer1 = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    var code = 'shieldBuzzerWrite(' + var_buzzer + ');\r\n'
    return code;
};

//板载蜂鸣器控制
Blockly.Arduino.WLKATA_buzzer = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    var code = 'shieldBuzzer(' + var_buzzer + ');\r\n'
    return code;
};

// 板载RGB控制
Blockly.Arduino.WLKATA_RGB = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    Blockly.Arduino.definitions_['define_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    var code = 'RGB_color(' + var_buzzer + ');\r\n';
    return code;
};

// 板载按键控制
Blockly.Arduino.WLKATA_Onboard = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    var var_buzzer1 = this.getFieldValue('buzzer1');
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    var code = 'shieldSwitchRead(' + var_buzzer + ')==' + var_buzzer1+'\r\n';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// GY33亮度设置
Blockly.Arduino.WLKATA_gy33_brightness = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    var var_buzzer1 = this.getFieldValue('buzzer1');
    Blockly.Arduino.definitions_['include_'+'WLKATA2'] = '#include <GY33.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.definitions_['var_declare_gy33_brightness'] = 'GY33 GY33;';
    Blockly.Arduino.setups_['setup_WLKATA_gy33_brightness'] = 'GY33.init(&' + var_buzzer + ',9600);';
    Blockly.Arduino.setups_['setup_WLKATA_gy33_brightness2'] = 'GY33.setBrightness(' + var_buzzer1 + ');\r\n';

    return '';
};

// GY33颜色
Blockly.Arduino.WLKATA_gy33_colour = function () {
    var var_buzzer = this.getFieldValue('buzzer');

    var code = 'readColor()=='+var_buzzer ;
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//从结果中获取ID方框的参数X中心
Blockly.Arduino.WLKATA_id_parameter = function () {
    var var_parameter = Blockly.Arduino.valueToCode(this, 'parameter', Blockly.Arduino.ORDER_ATOMIC);
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var var_obtain = this.getFieldValue('obtain');

    var code = 'huskylens.read' + var_frame + 'Parameter(' + var_parameter + ').' + var_obtain
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 2560重启
Blockly.Arduino.WLKATA_restart = function () {
    var var_buzzer = this.getFieldValue('buzzer');
    Blockly.Arduino.definitions_['include_'+'WLKATA1'] = '#include <WLKATA.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.setups_['setup_WLKATA_object'] = 'shieldInit();';
    var code = 'reset();\r\n'
    return code;
};

//#####################################################################################################
// 初始化二哈传感器
Blockly.Arduino.WLKATA_HuskyLens = function () {
    Blockly.Arduino.definitions_['include_'+'WLKATA3'] = '#include <DFRobot_HuskyLens.h>';//严格函数,固定写法(转include调用内容)
    Blockly.Arduino.definitions_['var_declare_DFRobot_HuskyLens'] = 'DFRobot_HuskyLens huskylens;';
    Blockly.Arduino.setups_['setup_WLKATA_DFRobot_HuskyLens'] = 'huskylens.beginI2CUntilSuccess();';
    return '';
};

// 二哈传感器切换算法直到成功
Blockly.Arduino.WLKATA_algorithm = function () {
    var var_resets = this.getFieldValue('algorithm');
    if (var_resets == 1) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_FACE_RECOGNITION);\r\n'
    }
    else if (var_resets == 2) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_OBJECT_TRACKING);\r\n'
    } else if (var_resets == 3) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_OBJECT_RECOGNITION);\r\n'
    }
    else if (var_resets == 4) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_LINE_TRACKING);\r\n'
    }
    else if (var_resets == 5) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_COLOR_RECOGNITION);\r\n'
    }
    else if (var_resets == 6) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_TAG_RECOGNITION);\r\n'
    }
    else if (var_resets == 7) {
        var code = 'huskylens.writeAlgorithm(ALGORITHM_OBJECT_CLASSIFICATION);\r\n'
    }
    return code;
};

//二哈传感器请求数据存入结果
Blockly.Arduino.WLKATA_result = function () {
    var code = 'huskylens.request();\r\n'
    return code;
};

// 从结果中获取已学ID总数
Blockly.Arduino.WLKATA_total = function () {
    var code = 'huskylens.readLearnedIDCount()'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 从结果中获取方框是否在画面中
Blockly.Arduino.WLKATA_frame = function () {
    // var var_frame = this.getFieldValue('frame');
    // if (var_frame == 1) {
    //     var code = 'huskylens.isAppearDirect(HUSKYLENSResultBlock)'
    // }
    // else if (var_frame == 2) {
    //     var code = 'huskylens.isAppearDirect(HUSKYLENSResultArrow)'
    // }
    // else{
    //     var code = 'huskylens.isAppearDirect(HUSKYLENSResultBlock)'
    // }

    var code = 'huskylens.isAppearDirect(HUSKYLENSResultBlock)'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 从结果获取靠近中心方框的ID总数
Blockly.Arduino.WLKATA_obtain = function () {
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var var_obtain = this.getFieldValue('obtain');
    var code = 'huskylens.read' + var_frame + 'CenterParameterDirect().' + var_obtain
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//从结果中获取ID是否学习
Blockly.Arduino.WLKATA_study = function () {
    var var_study = Blockly.Arduino.valueToCode(this, 'study', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'huskylens.isLearned(' + var_study + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//从结果中获取ID方框的参数X中心
Blockly.Arduino.WLKATA_id_parameter = function () {
    var var_parameter = Blockly.Arduino.valueToCode(this, 'parameter', Blockly.Arduino.ORDER_ATOMIC);
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var var_obtain = this.getFieldValue('obtain');

    var code = 'huskylens.read' + var_frame + 'Parameter(' + var_parameter + ').' + var_obtain
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 从结果中获取方框总数
Blockly.Arduino.WLKATA_total1 = function () {
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var code = 'huskylens.readCount(HUSKYLENSResult' + var_frame + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//从结果中获取第1个方框的ID参数
Blockly.Arduino.WLKATA_id_result = function () {
    var var_result = Blockly.Arduino.valueToCode(this, 'result', Blockly.Arduino.ORDER_ATOMIC);
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var var_obtain = this.getFieldValue('obtain');
    var code = 'huskylens.read' + var_frame + 'ParameterDirect(' + var_result + ').' + var_obtain
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// 从结果中获取方框总数
Blockly.Arduino.WLKATA_total2 = function () {
    var var_result = Blockly.Arduino.valueToCode(this, 'total2', Blockly.Arduino.ORDER_ATOMIC);
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var code = 'huskylens.readCount(' + var_result + ',HUSKYLENSResult' + var_frame + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//从结果中获取id1第1个方框的参数X中心点
Blockly.Arduino.WLKATA_id_result1 = function () {
    var var_result = Blockly.Arduino.valueToCode(this, 'result', Blockly.Arduino.ORDER_ATOMIC);
    var var_result1 = Blockly.Arduino.valueToCode(this, 'result1', Blockly.Arduino.ORDER_ATOMIC);
    // var var_frame = this.getFieldValue('frame');
    var var_frame = "Block";
    var var_obtain = this.getFieldValue('obtain');
    var code = 'huskylens.read' + var_frame + 'Parameter(' + var_result + ',' + var_result1 + ').' + var_obtain
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//自动学习一次ID
Blockly.Arduino.WLKATA_automatic = function () {
    var var_automatic = Blockly.Arduino.valueToCode(this, 'automatic', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'huskylens.learnOnece(' + var_automatic + ');\r\n'
    return code;
};

//遗忘当前算法的所有学习数据
Blockly.Arduino.WLKATA_forget = function () {
    var code = 'huskylens.forgetLearn();\r\n'
    return code;
};

//自动学习一次ID
Blockly.Arduino.WLKATA_name = function () {
    var var_name1 = Blockly.Arduino.valueToCode(this, 'name1', Blockly.Arduino.ORDER_ATOMIC);
    var var_name2 = Blockly.Arduino.valueToCode(this, 'name2', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'huskylens.writeName(String(' + var_name2 + '),' + var_name1 + ');\r\n'
    return code;
};
//自动学习一次ID
Blockly.Arduino.WLKATA_screen = function () {
    var var_name1 = Blockly.Arduino.valueToCode(this, 'name1', Blockly.Arduino.ORDER_ATOMIC);
    var var_name2 = Blockly.Arduino.valueToCode(this, 'name2', Blockly.Arduino.ORDER_ATOMIC);
    var var_name3 = Blockly.Arduino.valueToCode(this, 'name3', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'huskylens.writeOSD(String(' + var_name1 + '),' + var_name2 + ',' + var_name3 + ');\r\n'
    return code;
};

//清除屏幕显示的文字
Blockly.Arduino.WLKATA_screen1 = function () {
    var code = 'huskylens.clearOSD();\r\n'
    return code;
};

//触发拍照保存到SD卡
Blockly.Arduino.WLKATA_save_SD = function () {
    var var_algorithm = this.getFieldValue('algorithm');
    var code = 'huskylens.' + var_algorithm + 'ToSDCard();\r\n'
    return code;
};
//触发拍照保存到SD卡
Blockly.Arduino.WLKATA_save_SD1 = function () {
    var var_algorithm = this.getFieldValue('algorithm');
    var var_algorithm1 = this.getFieldValue('algorithm1');
    var code = 'huskylens.' + var_algorithm + 'TFCard(' + var_algorithm1 + ');\r\n'
    return code;
};
//#####################################################################################################
//AGV小车前进后退左转右转
Blockly.Arduino.WLKATA_AGV_move = function () {
    var var_claw1 = this.getFieldValue('claw2');
    var var_axle7_distance = Blockly.Arduino.valueToCode(this, 'AGV_move', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_move'] = 'Serial2.begin(115200);';
    var code = 'Serial2.print("AT=' + var_claw1 + var_axle7_distance + '\\r\\n");\r\n';
    return code;
};

//AGV小车巡线
Blockly.Arduino.WLKATA_AGV_patrol = function () {
    var var_axle7_distance = Blockly.Arduino.valueToCode(this, 'AGV_patrol', Blockly.Arduino.ORDER_ATOMIC);
    var var_axle7_distance2 = Blockly.Arduino.valueToCode(this, 'AGV_patrol2', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_move'] = 'Serial2.begin(115200);';
    var code = 'Serial2.print("AT=t'+ var_axle7_distance + ','+var_axle7_distance2+'\\r\\n");\r\n';
    return code;
};

///AGV小车左右巡线
Blockly.Arduino.WLKATA_AGV_qet = function () {
    var var_claw1 = this.getFieldValue('claw2');
    Blockly.Arduino.setups_['setup_WLKATA_move'] = 'Serial2.begin(115200);';
    var code = 'Serial2.print("AT='+ var_claw1 +'\\r\\n");\r\n';
    return code;
};

///AGV小车速度
Blockly.Arduino.WLKATA_AGV_speed = function () {
    var var_axle7_distance = Blockly.Arduino.valueToCode(this, 'AGV_speed', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_WLKATA_move'] = 'Serial2.begin(115200);';
    var code = 'Serial2.print("AT=p'+ var_axle7_distance +'\\r\\n");\r\n';
    return code;
};
///AGV小车风扇
Blockly.Arduino.WLKATA_AGV_feng = function () {
    var var_claw1 = this.getFieldValue('claw2');
    Blockly.Arduino.setups_['setup_WLKATA_move'] = 'Serial2.begin(115200);';
    var code = 'Serial2.print("AT=f'+ var_claw1 +'\\r\\n");\r\n';
    return code;
};