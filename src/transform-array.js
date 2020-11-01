const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev') {
          i += 2;
        } else {
          i += 1;
        }
        break;

      case '--discard-prev':
        if(i > 0) res.pop();
        break;

      case '--double-next':
        if(i !== arr.length - 1) {
          res.push(arr[i+1],arr[i+1]);
          i++;
        }
        break;

      case '--double-prev':
        if(i > 0) res.push(arr[i-1]);
        break;

      default:
        res.push(arr[i]);
    }
  }
  return res;
};







