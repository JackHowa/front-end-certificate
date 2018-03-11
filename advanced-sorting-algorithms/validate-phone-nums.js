function telephoneCheck(str) {
	let threeDigits = "\\d{3}";
	let fourDigits = "\\d{4}";

	// covers only us, "1", and "1 "
	let optionalCountrySpace = "\(" + "\[1\] " + "\|" + "\[1\]" + "\|\)";

	let openParenthesis = "\(" + "\[\(\]" + "\|" + "\)";

	let enclosingParenthesis = "\(" + "\[\)\] " + "\|" + "\[\)\]" + "\|-" + "\|" + " \|" + "\)";

	let optionalDash = "\(" + "-" + "\|" + " \|" + "\)";

	let regexString = "^" + optionalCountrySpace + openParenthesis + threeDigits + enclosingParenthesis + threeDigits + optionalDash + fourDigits + "$";

	let re = new RegExp(regexString, 'g');


	// could make sure that this is and 
	// return (str.match(re) ? true : false) && checkParenPairs(str);
	return (str.match(re) ? true : false)
}

// (a)?b(?(1)c|d)
function checkParenPairs(str) {
	let string = "\(" + 
	let re = new RegExp("\(?\((\))[)]", 'g');
	return str.match(re) ? true : false;
}

// may just need to hardcode 
// if one paren, then need another somewhere 
// have to ensure that this remains false though 
// telephoneCheck("(555)5(55?)-5555")



console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555")); 
console.log(telephoneCheck("1555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555")); 
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("(555)555-5555"));

// may have to partial conditional logic if parens then enclosing parens 
console.log(telephoneCheck("1 555)555-5555")); // should return false


console.log(telephoneCheck("1555 555 5555"));
