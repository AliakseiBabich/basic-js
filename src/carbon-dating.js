const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const ln = 2.718;
  let years = 0;
  if (sampleActivity === null || sampleActivity === undefined || typeof(sampleActivity) !== Number) {
    return false;
  } else {
    years = (ln * (MODERN_ACTIVITY / sampleActivity)) / ((MODERN_ACTIVITY / sampleActivity) / HALF_LIFE_PERIOD);
    return years.ceil();
  }
};
