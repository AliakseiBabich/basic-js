const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
      return this;
    } else {
      this.chain.push(value);
      return this;
    }
  },

  removeLink(position) {
    if (typeof(position) !== 'number' || !position) {
      this.chain = [];
      throw 'THROWN';
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let strChain = '';

    let i = 0;

    while (i < this.chain.length) {
      if(i === 0) {
        strChain += `( ${this.chain[i]} )`;
      } else {
        strChain += `~~( ${this.chain[i]} )`;
      }
      i++;
    }
    this.chain = [];

    return strChain;
  }
};

module.exports = chainMaker;
