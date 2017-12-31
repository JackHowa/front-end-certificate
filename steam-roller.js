function steamrollArray(arr) {
  let flatArray = [];

  for (let index = 0; index < arr.length; index++) {
    if (Array.isArray(arr[index])) {
      if (Array.isArray(arr[index][0])) {
        console.log("array of array");
        flatArray.push(arr[index][0][0]);
      } else {
        flatArray.push(arr[index][0]);
      }
    } else {
      flatArray.push(arr[index]);
    }
  }

  return flatArray;
}

const firstTest = steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);

console.log(firstTest);