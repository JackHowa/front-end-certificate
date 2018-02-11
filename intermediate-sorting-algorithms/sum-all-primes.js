function sumPrimes(num) {
	let primes = [];

	// exclude 0, 1 from qualifying 
	for (let potentialPrime = 2; potentialPrime <= num; potentialPrime++) {
		// hope for the best 
		// if set false
		// then don't add num to array
		let prime = true;

		// exclude 0, 1
		// stop at itself 
		for (let potentialMultiple = 2; potentialMultiple < potentialPrime; potentialMultiple++) {
			if (potentialPrime % potentialMultiple == 0) {
				prime = false;
			}
		}

		if (prime == true) {
			primes.push(potentialPrime);
		}
	}
	return primes;
}

console.log(sumPrimes(10));

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199


// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.