"use strict";

var MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  var string = expr;
  var dot = '10';
  var dash = '11';
  var result = '';

  for (var i = 0; i < expr.length; i += 10) {
    var sub = string.substr(i, 10);
    var letter = '';

    if (sub === "**********") {
      result += ' ';
      continue;
    }

    for (var j = 0; j < sub.length; j += 2) {
      letter += sub[j] + sub[j + 1] === dot ? '.' : sub[j] + sub[j + 1] === dash ? '-' : '';
    }

    result += MORSE_TABLE[letter];
  }

  return result;
}

module.exports = {
  decode: decode
};