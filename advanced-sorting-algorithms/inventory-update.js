function updateInventory(inventoryInitial, inventoryChange) {
  // loop through all of the inventory change
  // find the change in inventory's name
  // compare that first inventory's name to all of the initial inventory
  // if the inventory change name is the same as that inventory's name
  // then add that inventory change array's first element amount to the initial change amount
  // else if the inventory change is not the same as the inventory's name
  // add that new change to the intial inventory
  // end loop
  // return the new initial inventory

  // loop through all of the inventory change
  for (let inventoryChangeIndex = 0; inventoryChangeIndex <
  inventoryChange.length; inventoryChangeIndex++) {
    // find the change in inventory's name
    let [inventoryChangeAmount, inventoryChangeName] = inventoryChange[inventoryChangeIndex];

    let inventoryInitialNames = inventoryInitial.map(
        inventoryElement => inventoryElement[1]);

    let indexFound = inventoryInitialNames.indexOf(inventoryChangeName);

    // return -1 if not found
    if (indexFound > -1) {
      inventoryInitial[indexFound][0] += inventoryChangeAmount;

      // update the inventory amount
      // need to find the index of that includes
    } else {
      // add that new change to the intial inventory
      inventoryInitial.push(inventoryChange[inventoryChangeIndex]);
    }
  }

  // have to alphabetize
  return inventoryInitial.sort(
      (previousElement, currentElement) => previousElement[1].localeCompare(
          currentElement[1]));
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
