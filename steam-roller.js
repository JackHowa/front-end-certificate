function steamrollArray(arr) {
  let flatArray = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index].isArray) {
      flatArray.push(arr[index][0]);
    }
  }

  return flatArray;



  // may want to iterate and check through each element is array
  // then check each
  // if one is array
  // then spread?
  // possibly recurse
  // or while loop
}

const firstTest = steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);

console.log(firstTest);