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

	// if there's parenthesis
	if (typeof checkParenPairs(str) === "boolean") {
			// could make sure that this is and 
			// return (str.match(re) ? true : false) && checkParenPairs(str);
			return (str.match(re) ? true : false) && checkParenPairs(str);
	} else {
		return str.match(re) ? true : false
	}
}

function checkParenPairs(str) {
	let openingParenthesis = "\[\(\]";
	let enclosingParenthesis = "\[\)\]";

	if (str.match(openingParenthesis)) {
		let checkMatchingParenthesises = "\\((?=\\d{3}\\)\)";
		console.log(str.match(checkMatchingParenthesises));
		return str.match(checkMatchingParenthesises) ? true : false;
	} else if (str.match(enclosingParenthesis)) {
		// reversing it won't reverse the direction of the parenthesis :( 
		let reversedStr = str.split("").reverse().join("");
		let checkMatchingParenthesises = "\\((?=\\d{3}\)";
		return reversedStr.match(checkMatchingParenthesises) ? true : false;
	} else {
		// no parens found
		return;
	}
}

// may just need to hardcode 
// if one paren, then need another somewhere 
// have to ensure that this remains false though 
// telephoneCheck("(555)5(55?)-5555")

console.log(telephoneCheck("(555-555-5555"));



// console.log(telephoneCheck("555-555-5555"));
// console.log(telephoneCheck("1 555-555-5555")); 
// console.log(telephoneCheck("1555-555-5555"));
// console.log(telephoneCheck("1 (555) 555-5555")); 
// console.log(telephoneCheck("5555555555"));
// console.log(telephoneCheck("(555)555-5555"));

// may have to partial conditional logic if parens then enclosing parens 
console.log(telephoneCheck("1 555)555-5555")); // should return false


// console.log(telephoneCheck("1555 555 5555"));
