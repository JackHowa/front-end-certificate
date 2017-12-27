function dropElements(arr, func) {
  const beginCutIndex = arr.findIndex(func);
  if (beginCutIndex === -1) {
    return [];
  }
  arr.slice(beginCutIndex);
}

const exampleTest = dropElements([1, 2, 3], function(n) {
  return n > 5;
});

console.log(exampleTest);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
