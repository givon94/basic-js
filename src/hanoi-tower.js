const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor(turns / (turnsSpeed / 3600));
  let results = {
    turns: turns,
    seconds: seconds
  };

  return results;
};
