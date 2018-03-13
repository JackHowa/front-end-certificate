function sym(args) {
  // The arguments object is an Array-like object corresponding to the arguments passed to a function.
  // arguments object can be converted to an array with es2015 from
  return Array.from(arguments).reduce( (previous, current) => {
      return [...previous, ...current];
    }, 
    []
  );
}

// isn't a set only allows unique elements 
// want only one 
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]
