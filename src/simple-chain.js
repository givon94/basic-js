const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position >= 0 && position < this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    }
    this.chain = [];
    throw new Error();
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join(' )~~( ');
    this.chain = [];
    return `( ${result} )`;
  }
};

module.exports = chainMaker;
