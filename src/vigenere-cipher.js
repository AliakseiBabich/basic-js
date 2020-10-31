const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reversed = true){
    this.reversed = reversed;
  }

  encrypt(str, key) {
    key = key.toUpperCase();
    key = key.padEnd(str.length, key);
    let space = 0;
    let answer = str.toUpperCase().split("").map((x,index)=>x.match(/\W|_|[0-9]/g)?((x==" "?(space++,x):x)):(String.fromCharCode((x.charCodeAt()+key[index-space].charCodeAt())%26+65)));
	  return this.reversed?answer.join(""):answer.reverse().join("");
  }

  decrypt(str, key) {
    key = key.toUpperCase();
    key = key.padEnd(str.length, key);
    let space = 0;
    let answer = str.toUpperCase().split("").map((x,index)=>x.match(/\W|_|[0-9]/g)?((x==" "?(space++,x):x)):(String.fromCharCode((x.charCodeAt()-key[index-space].charCodeAt()+26)%26+65)));
	  return this.reversed?answer.join(""):answer.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
