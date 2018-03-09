function telephoneCheck(str) {

	let regex = /(?<areaCode>\d{3})/u;
	let result = str.replace(regex, (...args) => {
		let {areaCode} = args[args.length - 1];
		return `{$areaCode}`;
	});

  // const firstThreeNums = RegExp('/^\d{3}/', 'g'); // first three characters are digits
  // return str.match(firstThreeNums) ? true : false; // use ternary
   
  
}

console.log(telephoneCheck("555-555-5555"));

