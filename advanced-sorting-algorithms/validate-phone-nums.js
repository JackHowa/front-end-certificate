function telephoneCheck(str) {
	const regex = /(^\d{3}|^\d{1} \d{3})-\d{3}-\d{4}/g;
	return str.match(regex) ? true : false;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555")); 
console.log(telephoneCheck("1 (555) 555-5555"));