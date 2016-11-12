Blockly.JavaScript['takeoff'] = function(block) {
  var altitude = block.getFieldValue("altitude");
  return 'mission+="takeoff,' + altitude + '|";';
};

Blockly.JavaScript['landing_gear'] = function(block) {
  var direction = block.getFieldValue("direction");
  return 'mission+="landing_gear,' + direction + '|";';
};

Blockly.JavaScript['flight_path'] = function(block) {
  var path = block.getFieldValue("path");
  return 'mission+="flight_path,' + path + '|";';
};

Blockly.JavaScript['heading_mode'] = function(block) {
  var mode = block.getFieldValue("mode");
  return 'mission+="heading_mode,' + mode + '|";';
};

Blockly.JavaScript['land'] = function(block) {
  return 'mission+="land";';  
};

Blockly.JavaScript['land_home'] = function(block) {
  return 'mission+="land_home";';
};

Blockly.JavaScript['hover'] = function(block) {
  var duration = Blockly.JavaScript.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_NONE);
  
  if(isNaN(parseInt(duration))) {
    return 'mission+="hover," + eval(' + duration + ') + "|";';
  } else {
    return 'mission+="hover,' + duration + '|";';
  }
};

Blockly.JavaScript['yaw_right'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  
  if(isNaN(parseInt(angle))) {
    return 'mission+="yaw_right," + eval(' + angle + ') + "|";';
  } else {
    return 'mission+="yaw_right,' + angle + '|";';
  }
};

Blockly.JavaScript['yaw_left'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  
  if(isNaN(parseInt(angle))) {
    return 'mission+="yaw_left," + eval(' + angle + ') + "|";';
  } else {
    return 'mission+="yaw_left,' + angle + '|";';
  }
};

Blockly.JavaScript['spin'] = function(block) {
  var direction = block.getFieldValue("direction");
  var times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_NONE);

  if(isNaN(parseInt(times))) {
    return 'mission+="spin,' + direction + '," + eval(' + times + ') + "|";';
  } else {
    return 'mission+="spin,' + direction + ',' + times + '|";';
  }
};

Blockly.JavaScript['photo'] = function(block) {
  return 'mission+="photo|";';
};

Blockly.JavaScript['photo_interval'] = function(block) {
  var num_photos = Blockly.JavaScript.valueToCode(block, 'num_photos', Blockly.JavaScript.ORDER_NONE);
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_NONE);
  var mission = 'mission+="photo_interval,';
  
  if(isNaN(parseInt(num_photos))) {
    mission = mission + '" + eval(num_photos) + ","';
  } else {
    mission = mission + num_photos + ",";
  }
  
  if(isNaN(parseInt(seconds))) {
    mission = mission + ' + eval(seconds) ';
  } else {
    mission = mission + seconds + '|";';
  }
  
  return mission;
  
};

Blockly.JavaScript['pitch_gimbal_to'] = function(block) {
  var angle = Blockly.JavaScript.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_NONE);
  return 'mission+="pitch_gimbal,' + angle + '|";';
};

Blockly.JavaScript['fly_forward'] = function(block) {
  var distance = Blockly.JavaScript.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_NONE);
  
  if(isNaN(parseInt(distance))) {
    return 'mission+="::fly_forward," + eval(' + distance + ') + "|";';
  } else {
    return 'mission+="::fly_forward,' + distance + '|";';
  }
};

Blockly.JavaScript['video'] = function(block) {
  var action = block.getFieldValue("video_status");
  return 'mission+="video,' + action + '|";';
};

/*
Blockly.JavaScript['orbit'] = function(block) {
  var radius = block.getFieldValue('radius');
  var altitude = block.getFieldValue('altitude');
  var direction = block.getFieldValue('direction');
  var heading = block.getFieldValue('heading');
  var rotation = block.getFieldValue('rotation');
  return "orbit," + radius + "," + altitude + "," + direction + "," + heading + "," + rotation + "|";
};
*/

Blockly.JavaScript['loop'] = function(block) {
  var repeats = Number(block.getFieldValue('TIMES'));
  var branch = Blockly.JavaScript.statementToCode(block, 'DO').trim();
  var code = "";
  
  for(var i=0; i < repeats; i++) {
    code += branch;
  }
  
  return code;
};

Blockly.JavaScript['change_altitude'] = function(block) {
  var altitude = Blockly.JavaScript.valueToCode(block, 'altitude', Blockly.JavaScript.ORDER_NONE);
  
  if(isNaN(parseInt(altitude))) {
    return 'mission+="::change_altitude," + eval(' + altitude + ') + "|";';
  } else {
    return 'mission+="::change_altitude,' + altitude + '|";';
  }
};