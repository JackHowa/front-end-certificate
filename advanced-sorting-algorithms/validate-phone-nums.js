function telephoneCheck(str) {
	let threeDigits = "\\d{3}";
	let fourDigits = "\\d{4}";
	let optionalCountrySpace = "\(" + "\\d{1} " + "\|\)";

	let regexString = "^" + optionalCountrySpace + threeDigits + "-" + threeDigits + "-" + fourDigits;

	var re = new RegExp(regexString, 'g');
	
	return str.match(re) ? true : false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555")); 
console.log(telephoneCheck("1 (555) 555-5555"));