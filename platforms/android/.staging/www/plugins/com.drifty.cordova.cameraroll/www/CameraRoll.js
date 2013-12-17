cordova.define("com.drifty.cordova.cameraroll.CameraRoll", function(require, exports, module) {var exec = require('cordova/exec');

var cameraRoll = {};

cameraRoll.getPhotos = function(successCallback, errorCallback, options) {
  exec(successCallback, errorCallback, "CameraRoll", "getPhotos", []);
};

module.exports = cameraRoll;
});
