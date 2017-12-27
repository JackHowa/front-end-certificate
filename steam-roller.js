function steamrollArray(arr) {
  const flatArray = [].concat(...arr);
  return Array.isArray(flatArray);
}

steamrollArray([1, [2], [3, [[4]]]]);
