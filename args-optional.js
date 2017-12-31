function addTogether() {
  if (!(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1]))) {
    return undefined;
  }
  return arguments[0] + arguments[1];
  function addMoreTogether() {}
}

// It has to add two numbers passed as parameters and return the sum.
const testTwoValidArgs = addTogether(2, 3);

console.log(testTwoValidArgs);

// The Number.isInteger() method determines whether the passed value is an integer.
// It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
const oneInvalidArg = addTogether(2, "3");

console.log("should be undefined:", oneInvalidArg);

// const testOneValid = addTogether(2)(3);

// console.log(testTwoValidArgs);

// It has to check if it has one or two arguments passed. More are ignored.
// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.
