function sym(args) {
  // flatten arguments 
  // create array of arguments object 
  // use reduce 
  let flatArray = Array.from(arguments).reduce( (previous, current) => [...previous, ...current]);
  return flatArray;
}

// isn't a set only allows unique elements 
// want only one 
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]
