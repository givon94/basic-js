const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isReverse = true) {
    this.isReverse = isReverse;
  }

  process(message, key, method) {
    if (!key && !message) throw new Error();

    let keyIndex = 0,
        res = [],
        cryptStr = '';

    let localMessage = message.toUpperCase();
    let localKey = key.toUpperCase();

    for (let i = 0; i < localMessage.length; i++) {
      let currentCode = localMessage[i].charCodeAt();

      if (currentCode >= 65 && currentCode <= 90) {
        if (method === 'encrypt') {
          cryptStr = String.fromCharCode((currentCode + localKey.charCodeAt(keyIndex)) % 26 + 65);
        } else {
          cryptStr = String.fromCharCode(((currentCode + 26) - localKey.charCodeAt(keyIndex)) % 26 + 65);
        }
        res.push(cryptStr);
        if (keyIndex !== localKey.length - 1) {
          keyIndex++;
        } else {
          keyIndex = 0;
        }
      } else {
        res.push(localMessage[i]);
      }

    }
    return this.isReverse ? res.join('') : res.reverse().join('');
  }

  encrypt(message, key) {
    return this.process(message, key, 'encrypt', false);
  }
  decrypt(message, key) {
    return this.process(message, key, 'decrypt', true);
  }
}

module.exports = VigenereCipheringMachine;
