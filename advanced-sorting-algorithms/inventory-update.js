function updateInventory(inventoryInitial, inventoryChange) {
  // loop through all of the inventory change
  // find the change in inventory's name
  // compare that first inventory's name to all of the initial inventory
  // if the inventory change name is the same as that inventory's name
  // then add that inventory change array's first element amount to the initial change amount
  // else if the inventory change is not the same as the inventory's name
  // add that new change to the intial inventory
  // end loop
  //

  for (let i = 0; i < inventoryChange.length; i++) {
    if (!(inventoryInitial.includes(inventoryChange[i]))) {
      inventoryInitial.push(inventoryChange[i]);
    }
  }

  return inventoryInitial;
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
