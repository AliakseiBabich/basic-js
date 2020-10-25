const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let codedStr = '';
  if (members === undefined) {
    return [];
  } else if (!Array.isArray(members)) {
    return false;
  }

	const newArr = members.filter(item => typeof(item) !== 'string' ? false : 'string');

  for (let i = 0; i < newArr.length; i++) {
		if (newArr[i][0] === ' ') {
      newArr[i] = newArr[i].trim();
    }
  }

	for (let i = 0; i < newArr.length; i++) {
		codedStr += newArr[i][0];
	}

	return codedStr.toLocaleUpperCase().split('').sort().join('');
};
