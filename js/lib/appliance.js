var util = require('./util'),
    updateMap = util.updateMap,
    updateCategory = util.updateCategory,
    updateOs = util.updateOs,
    updateVersion = util.updateVersion,
    dataset = require('./dataset');

var challengePlaystation = exports.challengePlaystation = function(ua, result) {
  var data = null;
  if (ua.indexOf('PSP (PlayStation Portable);') >= 0) data = dataset.get('PSP');
  else if (ua.indexOf('PlayStation Vita') >= 0) data = dataset.get('PSVita');
  else if (ua.indexOf('PLAYSTATION 3;') >= 0) data = dataset.get('PS3');

  if (! data)
    return false;

  updateMap(result, data);
  return true;
};

var challengeNintendo = exports.challengeNintendo = function(ua, result) {
  var data = null;
  if (ua.indexOf('Nintendo 3DS;') >= 0) data = dataset.get('Nintendo3DS');
  else if (ua.indexOf('Nintendo DSi;') >= 0) data = dataset.get('NintendoDSi');
  else if (ua.indexOf('Nintendo Wii;') >= 0) data = dataset.get('NintendoWii');

  if (! data)
    return false;

  updateMap(result, data);
  return true;
};

var challengeDigitalTV = exports.challengeDigitalTV = function(ua, result) {
  var data = null;
  if (ua.indexOf('InettvBrowser/') >= 0) data = dataset.get('DigitalTV');

  if (! data)
    return false;

  updateMap(result, data);
  return true;
};