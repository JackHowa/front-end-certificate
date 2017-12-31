function steamrollArray(arr, current = []) {
  for (let element of arr) {
    Array.isArray(element) ? steamrollArray(element, current) : current.push(element);
  }
  return current;
}


// for of 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// for (variable of iterable) {
//  statement
// }


// ternary https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// condition ? expr1 : expr2 
// 'The fee is ' + (isMember ? '$2.00' : '$10.00');


const firstTest = steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]);

console.log(firstTest);