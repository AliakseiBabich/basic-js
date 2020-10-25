const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	let monthN = 0,
      month = '';
      
  if (typeof(date) !== 'object') {
    return 'Unable to determine the time of year!';
  } else if (date !== null) {
    monthN = date.getMonth();
  } else {
    return 'Error';
  }

  if (Object.prototype.toString.call(date) != "[object Date]") {
    throw new Error();
  }
	
		if (monthN >= 2 && monthN < 5) {
			month = 'spring';
		} else if (monthN >= 5 && monthN < 8) {
			month = 'summer';
		} else if (monthN >= 8 && monthN < 11) {
			month = 'autumn';
		} else if (monthN < 2 || monthN > 10) {
			month = 'winter';
		}
	
	return month;
};
