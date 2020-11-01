const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
        repeatTimes = 1,
        separator = "+",
        addition = '',
        additionRepeatTimes,
        additionSeparator = "|"
      } = options,

      result = [];

  additionRepeatTimes = additionRepeatTimes !== undefined ? additionRepeatTimes : 1;

  for (let i = 0; i < repeatTimes; i++) {
    result.push(`${str}`);

    for (let i = 0; i < additionRepeatTimes; i++) {
      if (addition !== undefined) result.push(`${addition}`);
      if (additionRepeatTimes > i + 1) result.push(additionSeparator);
    }
    if (repeatTimes > i + 1) result.push(separator);
  }
  return result.join('');
};
