function sym(args) {
  // The arguments object is an Array-like object corresponding to the arguments passed to a function.
  // arguments object can be converted to an array with es2015 from
  return Array.from(arguments).reduce( (previous, current) => {
    // make the previous array to edit it 
    // let previousArray = Array.from(previous);
    console.log(previous);
    // if previous array includes current 
    // need to find the index of that match
    let matchIndex = previous.findIndex(current);

    // findIndex returns -1 if no match 
    if (matchIndex != "-1") {
      // then delete both the previous array match and current element
      // oh no I've made a dire mistake, you're not unique, you must go 
      previousArray.slice(matchIndex, 1);
      return previousArray;
    } else {
      return [...previous, ...current];
    }  
  }, 
  // spread into an empty array initial value
  []
  );
}

// isn't a set only allows unique elements 
// want only one 
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]
