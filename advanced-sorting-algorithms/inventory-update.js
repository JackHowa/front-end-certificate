function updateInventory(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (!(arr1.includes(arr2[i]))) {
      arr1.push(arr2[i]);
    }
  }

  return arr1;
}

// Example inventory lists
let curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone'],
];

let newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste'],
];

console.log(updateInventory(curInv, newInv));
