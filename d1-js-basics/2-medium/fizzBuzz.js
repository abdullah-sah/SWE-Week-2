/*
Write a function called fizzBuzz that accepts a number as an argument.
Return “FIZZ” if the number is divisible by 3
Return “BUZZ” if the number is divisible by 5
Return “FIZZBUZZ” if the number is divisible by both 3 and 5
If the number is not divisible by either 3 or 5, return the number.
 */

const fizzBuzz = (num) => {
	if (num % 3 === 0 && num % 5 === 0) {
		return 'FIZZBUZZ';
	} else if (num % 3 === 0) {
		return 'FIZZ';
	} else if (num % 5 === 0) {
		return 'BUZZ';
	} else {
		return num;
	}
}

console.log(fizzBuzz(30));

// Test command (in terminal) "npm run test:d1:medium:fizzBuzz"
module.exports = { fizzBuzz };
