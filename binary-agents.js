function binaryAgent(str) {
  return String.fromCharCode(str);
}

const firstLetterTest = binaryAgent("01000001");

console.log(firstLetterTest); // 䉁 huh? han char

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
