function binaryAgent(str) {
  const binaryArray = str.split(" ");
  return binaryArray.map(e => binaryToLetter(e));
}

function binaryToLetter(binaryElement) {
  let decimalNum = parseInt(binaryElement, 2);
  return String.fromCharCode(decimalNum);
}

const firstLetterTest = binaryToLetter("01000001");

console.log(firstLetterTest); // A

const manyLettersTest = binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

console.log(manyLettersTest);

// parseInt(string, radix);
// radix
// An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.
