/*jshint esversion: 6 */

// setup an array for cash currency name to value
const CASH_VALUE_ASCENDING = [
  0.01,
  0.05,
  0.1,
  0.25,
  1.0,
  5.0,
  10.0,
  20.0,
  100.0,
];

function checkCashRegister(price, cash, cid) {
  // subtract price of item from cash given for item
  let cashChange = cash - price;

  let totalCashInDrawer = cid.reduce(
      (total, currencyNameAndCash) => total + currencyNameAndCash[1]);

  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  if (totalCashInDrawer < cashChange) {
    return 'Insufficient Funds';
  } else if (totalCashInDrawer === cashChange) {
    return 'Closed';
  }

  let registerIndex = 8;

  let currencyAndAmount = [];

  // want to run out if sufficient funds going into it
  // if cash change isn't done
  while (cashChange > 0 && registerIndex >= 0) {
    let currencyCashValue = CASH_VALUE_ASCENDING[registerIndex];

    // find how many notes go into the cash in drawer value
    let [drawerCurrencyName, drawerAmount] = cid[registerIndex];
    let drawerCurrencyQuantity = Math.floor(drawerAmount / currencyCashValue);

    // find how many full notes can go into the cash change value
    let changeCurrencyQuantity = Math.floor(cashChange / currencyCashValue);

    // figure out how much change you can give
    let actualChangeCurrencyQuantity =
        changeCurrencyQuantity < drawerCurrencyQuantity
            ? changeCurrencyQuantity
            : drawerCurrencyQuantity;

    // convert that currency quantity back into money
    let actualChangeMoney = actualChangeCurrencyQuantity * currencyCashValue;

    // will have to round it too
    // enough for basic math
    actualChangeMoney = Math.round(actualChangeMoney * 100) / 100;

    // check if the change amount is zero
    if (actualChangeMoney !== 0) {
      // put that new change in an array
      currencyAndAmount.push([drawerCurrencyName, actualChangeMoney]);
    }

    // running cash change total - new change money amount
    cashChange -= actualChangeMoney;

    // will have to round it after each subtraction
    cashChange = Math.round(cashChange * 100) / 100;

    // iterate the index backward
    registerIndex--;
  }

  // not the prettiest last check
  let totalChange = currencyAndAmount.reduce(
      (total, currencyNameAndCash) => total + currencyNameAndCash[1]);

  if (totalChange < cash - price) {
    return 'Insufficient Funds';
  }

  // return array of the cash name and currency total money amount
  return currencyAndAmount;
}

console.log(
    checkCashRegister(19.5, 20.0, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90.0],
      ['FIVE', 55.0],
      ['TEN', 20.0],
      ['TWENTY', 60.0],
      ['ONE HUNDRED', 100.0],
    ]),
);

console.log(
    checkCashRegister(3.26, 100.0, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90.0],
      ['FIVE', 55.0],
      ['TEN', 20.0],
      ['TWENTY', 60.0],
      ['ONE HUNDRED', 100.0],
    ]),
);
