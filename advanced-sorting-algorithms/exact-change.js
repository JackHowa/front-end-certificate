/*jshint esversion: 6 */

// setup an array for cash currency name to value 
const CASH_VALUE_ASCENDING = [ 0.01, 0.05, 0.1, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00 ];

function checkCashRegister(price, cash, cid) {
	// subtract price of item from cash given for item  
	let cashChange = cash - price;

	let totalCashInDrawer = cid.reduce( (total, currencyNameAndCash) => {
    return total += currencyNameAndCash[1];
  }, 0.0);

  totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;

  if (totalCashInDrawer < cashChange) {
    return "Insufficient Funds";
  } else if (totalCashInDrawer === cashChange) {
    return "Closed";
  }

	let registerIndex = 8;

	let currencyAndAmount = [];

	while (cashChange > 0) {
		let currencyCashValue = CASH_VALUE_ASCENDING[registerIndex];

		// find how many notes go into the cash in drawer value 
		let [drawerCurrencyName, drawerAmount] = cid[registerIndex];
		let drawerCurrencyQuantity = Math.floor(drawerAmount / currencyCashValue);

		// find how many full notes can go into the cash change value 
		let changeCurrencyQuantity = Math.floor(cashChange / currencyCashValue);

		// figure out how much change you can give 
		let actualChangeCurrencyQuantity;

		// (9 dimes possible, 12 dimes actual)
		if (changeCurrencyQuantity < drawerCurrencyQuantity) {
			// if you have more change than you can return to the customer 
			// just give the most you can return 
			actualChangeCurrencyQuantity = changeCurrencyQuantity;
		} else {
			// change currency quantity (10 dimes) possible - existing dimes 15 
			// if you can give more change than you have 
			// give all the change you got (9 dimes)
			// (10 dimes possible, 9 dimes actual)
			// do the best you can do 
			actualChangeCurrencyQuantity = drawerCurrencyQuantity;
		}

		// convert that currency quantity back into money 
		let actualChangeMoney = actualChangeCurrencyQuantity * currencyCashValue;

		// will have to round it too 
		// enough for basic math
		actualChangeMoney = Math.round(actualChangeMoney * 100) / 100;

		// check if the change amount is zero 
		if (actualChangeMoney !== 0) {
			// put that new change in an array 
			// keep trailing zeroes and round 
			// need 60.00, even when rounds normally 60 
			// also need a number 
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
	let totalChange = currencyAndAmount.reduce( (total, currencyNameAndCash) => {
		return total += currencyNameAndCash[1];
	}, 0.0);

	if (totalChange < (cash - price)) {
		return "Insufficient Funds";
	}

	// return array of the cash name and currency total money amount 
	return currencyAndAmount;
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

// float making and round to number via https://stackoverflow.com/a/24889569