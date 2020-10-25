const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let finStr = '';
  const {
    repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'
  } = options;
  str = String(str);

  if (options.repeatTimes === undefined) {
    return finStr += str + addition ;
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      if (additionRepeatTimes === 0) {
        finStr += str + addition + separator;
      } else {
        finStr += str + `${addition}${additionSeparator}`.repeat(additionRepeatTimes - 1) + addition + separator;
  
      }
    }
  }  
  return finStr.slice(0, -separator.length);
};
