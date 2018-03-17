function sym(args) {
  let argumentsArray = Array.from(arguments); // [ [ 1, 2, 5 ], [ 2, 3, 5 ], [ 3, 4, 5 ] ]

  return argumentsArray.reduce( (symmetricDifferences, currentArray) => {
    // have to dedupe them first 
    currentArray = removeDuplicatesFromTheArray(currentArray);
    let flatArray = symmetricDifferences.concat(currentArray);
    return findUniques(flatArray);
  }, [])
}

function removeDuplicatesFromTheArray(array) {
  return Array.from(new Set(array));
}

function findUniques(flatArray) {
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
// console.log(sym([1, 2, 3], [5, 2, 1, 4])); // should return [3,4,5]
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])); // should return [1, 4, 5]

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));



