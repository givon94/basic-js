const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cats = backyard.flat().filter(item => item === '^^');
  return cats.length;
};
