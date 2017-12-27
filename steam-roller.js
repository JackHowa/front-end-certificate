function steamrollArray(arr) {
  const flatArray = [].concat(...arr);
  return Array.isArray(flatArray);
  // may want to iterate and check through each element is array
  // then check each
  // if one is array
  // then spread?
  // possibly recurse
  // or while loop
}

steamrollArray([1, [2], [3, [[4]]]]);
