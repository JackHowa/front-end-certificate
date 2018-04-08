// jshint esversion:6

// str = "aab"
// for finding amount of permutations
// create an array with all possible permutations of string
// ["aab", "aab", "aba", "aba","baa","baa"]
// check whether any of the combinations have repeating patterns
// if a combination has repeating patter, delete it
// count the number of possible combinations (2)
function permAlone(lettersString) {
  let lettersArray = lettersString.split(''); // [ 'a', 'a', 'b' ]

  // find unique
  // make new set
  let uniqueLettersArray = Array.from([...new Set(lettersArray)]); // [ 'a', 'a', 'b' ]

  // Number of sample points in set
  // r
  let uniqueLettersCount = uniqueLettersArray.length;

  // Number of sample points in each permutation
  // n
  let letterQuantity = lettersArray.length;

  // nPr = n! / (n - r)!
  return factorialize(letterQuantity) / (factorialize(letterQuantity - uniqueLettersCount));
}

function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }

  return num;
}

console.log(permAlone('aab'));
