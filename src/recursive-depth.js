const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    const depth = arr.map(item => (item instanceof Array) ? 1 + this.calculateDepth(item) : 1);
    return Math.max(...depth);
  }
};