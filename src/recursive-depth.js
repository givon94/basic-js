const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0){
    if (Array.isArray(arr)) {
      level++;
      let p = level;
      for(let i = 0; i < arr.length; i++){
        let c = arr[i];
        let sublevel = this.calculateDepth(c, level)
        p = Math.max(p, sublevel);
      }
      return p;
    }  else {
      return level;
    }
  }
};
