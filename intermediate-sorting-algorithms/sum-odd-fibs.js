function sumFibs(num) {

	// construct array of fibs only up to num 
	// set empty container 
	let fibs = [];
	let i = 0; 
	let current = 0; 

	while (current <= num) {
		if (i < 2) {
			fibs.push(i); 
		} else {
			current = fibs[i - 2] + fibs[i - 1];
			fibs.push(current);
		}
		i++;
	}
	return current;
}   
  
console.log(sumFibs(4)); 





    // fib 1
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.