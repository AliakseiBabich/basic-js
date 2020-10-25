const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (Array.isArray(arr) && arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        if (arr[i + 1] !== undefined) {
          i += 1;
        } else {
          continue;
        }
      } else if (arr[i] === '--discard-prev') {
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          newArr.pop();
        } else {
          continue;
        }
      } else if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        } else {
          continue;
        }
      } else if (arr[i] === '--double-prev') {
        if (arr[i - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          newArr.push(arr[i - 1]);
        } else {
          continue;
        }
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } else if (arr.length === 0) {
    newArr = [];
    return newArr;
  } else {
    return 'Error';
  }
};
