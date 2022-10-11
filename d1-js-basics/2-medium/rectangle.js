/* 
We are going to build some functions to help us deal with rectangles.
All functions will take two numbers as arguments: argument1 is width, argument2 is height.
1. Write a function called findArea that returns the area.
2. Write a function called findPerimeter that will both return the perimeter and log it to the console.
3. Write a function that checks if the rectangle is a square.
Code Below*/

const findArea = (width, height) => {
	return Number(width) * Number(height);
}

const findPerimeter = (width, height) => {
	let perimeter = (2 * Number(width)) + (2 * Number(height));
	console.log(perimeter);
	return (perimeter);
}

const isSquare = (width, height) => {
	if (Number(width) === Number(height)) {
		return true;
	} else {
		return false;
	}
}


// Test command (in terminal) "npm run test:d1:medium:rectangle"
module.exports = { findArea, findPerimeter, isSquare };
