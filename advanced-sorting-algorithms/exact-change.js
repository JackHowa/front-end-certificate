// subtract price of item from cash given for item  
// setup a dictionary for cash currency name to value 


// setup an array for cash currency name to value 
const CASH_VALUE_ASCENDING = [ 0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100 ];

function checkCashRegister(price, cash, cid) {
	// subtract price of item from cash given for item  
	let cashChange = cash - price;

	let drawerCurrencyFrequency = [];

	// find how many notes go into the cash in drawer value 
	// create a new array with cash in drawer name and quantity 
	let drawerNameAndQuantity = cid.map((drawerNameAndTotal, index) => {
		let [drawerCurrencyName, drawerAmount] = drawerNameAndTotal;
		let drawerCurrencyQuantity = Math.floor(drawerAmount / CASH_VALUE_ASCENDING[index]);
		return [drawerCurrencyName, drawerCurrencyQuantity];
	});


}

function round(numberInput) {
	return Math.round(numberInput * 100) / 100;
}
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
