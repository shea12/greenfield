var s2 = require('./s2');

var regions = {
  '808580f9': 1,
  '808580fb': 1,
  '80858059': 1,
  '808580f7': 1,
  '808580f1': 1,
  '8085805f': 1,
  '808580f5': 1,
  '808580f3': 1,
  '80858067': 1,
  '80858061': 1,
  '8085808b': 1,
  '8085808d': 1,
  '80858093': 1,
  '8085806f': 1,
  '80858065': 1,
  '80858063': 1,
  '80858089': 1,
  '8085808f': 1,
  '80858091': 1,
  '80858097': 1,
  '80858071': 1,
  '8085807b': 1,
  '8085807d': 1,
  '80858087': 1,
  '80858085': 1,
  '8085809b': 1,
  '80858099': 1,
  '80858077': 1,
  '80858079': 1,
  '8085807f': 1,
  '80858081': 1,
  '80858083': 1,
  '8085809d': 1,
  '8085809f': 1,
  '808580a1': 1,
  '808f7fd9': 1,
  '808f7fd7': 1,
  '808f7fd5': 1,
  '808f7e2b': 1,
  '808f7e29': 1,
  '808f7e27': 1,
  '808f7e21': 1,
  '808f7fdb': 1,
  '808f7fd1': 1,
  '808f7fd3': 1,
  '808f7e2d': 1,
  '808f7e2f': 1
};

exports.inRegion = function(lat, lng) {
  var token = s2.cellToken(lat, lng);
  if (regions[token] === undefined) {
    return false;
  } else {
    return true;
  }
};