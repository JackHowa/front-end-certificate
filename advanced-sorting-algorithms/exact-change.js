function checkCashRegister(price, cash, cid) {
  const CONVERSION_SEQUENCE = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  let conversionIndex = 0;
  let newCashInDrawer = [];

  let changeToGiveBack = cash - price;
  while (changeToGiveBack > 0) {
    // use pop to start at the end of the array of arrays
    // [1,2,4] will start with 4 now
    // [...,["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])]
    let [currency, amountOfCurrency] = cid.pop();

    if (typeof amountOfCurrency === "undefined") {
      // there's no more pennies left to fulfill the total amount 
      // the while loop has exceeded the amount of money left
      // basically there's cash left from the customer, but not in the register 
      return "Insufficient Funds";
    }


    // have to map the amounts per cash currency 

    // furthermore, that amount should only go in as much as cash allows
    // in essence, you shouldn't charge the customer if they can't fully use all of the money
    // per currency 

    // how many times base currency goes into cash from customer
    // like a hundred should, first, only go in fully as 100 to the totalCash 
    // 0 if bill goes over even what can be alloted
    let howManyCurrency = Math.floor(changeToGiveBack / CONVERSION_SEQUENCE[conversionIndex]); 
    
    changeToGiveBack -= (howManyCurrency * CONVERSION_SEQUENCE[conversionIndex]);
    
    // need to update the cash drawer
    // difficult to use pop then because it's destructive of the array
    // need to update amountOfCurrency by subtracting similar to 
    amountOfCurrency -= (howManyCurrency * CONVERSION_SEQUENCE[conversionIndex]);
    
    // can use unshift to always add to the front 
    // this will only go through what we get to
    // todo: might miss pennies if we get exact change 

    // need to do this ([hey] | [ho, hi]) => [hey, ho, hi] in ruby 
    newCashInDrawer.unshift([currency, amountOfCurrency]);

    conversionIndex ++;
    console.log(changeToGiveBack);
  }
  return newCashInDrawer;
}
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.10],
  // ["QUARTER", 4.25],
  // ["ONE", 90.00],
  // ["FIVE", 55.00],
  // ["TEN", 20.00],
  // ["TWENTY", 60.00],
  // ["ONE HUNDRED", 100.00]]
  
  console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
  
/*
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return "Closed".
*/