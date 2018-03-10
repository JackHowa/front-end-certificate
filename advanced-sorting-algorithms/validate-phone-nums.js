function telephoneCheck(str) {
	let threeDigits = "\\d{3}";
	let fourDigits = "\\d{4}";

	// covers only us, "1", and "1 "
	let optionalCountrySpace = "\(" + "\[1\] " + "\|" + "\[1\]" + "\|\)";

	let openParenthesis = "\(" + "\[\(\]" + "\|" + "\)";

	let enclosingParenthesis = "\(" + "\[\)\] " + "\|" + "\[\)\]" + "\|-" + "\|" + " \|" + "\)";

	let optionalDash = "\(" + "-" + "\|" + " \|" + "\)";

	let regexString = "^" + optionalCountrySpace + openParenthesis + threeDigits + enclosingParenthesis + threeDigits + optionalDash + fourDigits + "$";

	var re = new RegExp(regexString, 'g');

	return str.match(re) ? true : false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555")); 
console.log(telephoneCheck("1555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555")); 
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("(555)555-5555"));

// may have to partial conditional logic if parens then enclosing parens 
console.log(telephoneCheck("1 555)555-5555")); // should return false


console.log(telephoneCheck("1555 555 5555"));
