function checkCashRegister(price, cash, cid) {
  const CONVERSION_SEQUENCE = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];

  let conversionIndex = 0;
  let newCashInDrawer = [];

  let changeToGiveBack = cash - price;
  for (let i = cid.length; i > 0; i--) {
    // use pop to start at the end of the array of arrays
    // [1,2,4] will start with 4 now
    // [...,["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])]
    let [currency, amountOfCurrency] = cid.pop();

    if (typeof amountOfCurrency === "undefined") {
      return "Insufficient Funds";
    }

    let howManyCurrency = Math.floor(changeToGiveBack / CONVERSION_SEQUENCE[conversionIndex]); 

    let totalAmountPerCurrency = howManyCurrency * CONVERSION_SEQUENCE[conversionIndex];

    if (totalAmountPerCurrency > amountOfCurrency) {
      changeToGiveBack -= totalAmountPerCurrency;
      amountOfCurrency -= totalAmountPerCurrency;
    }
    
    // can use unshift to always add to the front 
    // this will only go through what we get to
    // todo: might miss pennies if we get exact change 

    // need to do this ([hey] | [ho, hi]) => [hey, ho, hi] in ruby 
    newCashInDrawer.unshift([currency, amountOfCurrency]);

    conversionIndex++;
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