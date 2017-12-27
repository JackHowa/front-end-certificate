function dropElements(arr, func) {
  const beginCutIndex = arr.findIndex(func);
  arr.splice(beg);
}

const exampleTest = dropElements([1, 2, 3], function(n) {
  return n < 2;
});

console.log(exampleTest);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
