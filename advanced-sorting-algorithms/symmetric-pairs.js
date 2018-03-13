function sym(args) {
  // flatten arguments 
  // create array of arguments object 
  // use reduce 
  // make flat array with reduce 

  // need to flatten more than one piece of the array
  let flatArray = Array.from(arguments).reduce( (previous, current) => [...previous, ...current]);
  
  // count occurences of flat array 
  let matchesCount = flatArray.reduce( (existingNumbers, currentNumber) => {
    if (currentNumber in existingNumbers) {
      // count up the amount of matches 
      existingNumbers[currentNumber]++;
    } else {
      // set the count to 1 
      existingNumbers[currentNumber] = 1;
    }

    return existingNumbers;
  }, {})

  // then delete any value except for ones that exist only once
  // return the keys of values as an array who have a 1 count 
  return Object.keys(matchesCount).reduce( (allTargetMatches, targetMatch) => {
    if (matchesCount[targetMatch] == 1) {
      allTargetMatches.push(parseInt(targetMatch));
    }
    return allTargetMatches;
  }, [])
}

// isn't a set only allows unique elements 
// want only one 
console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]