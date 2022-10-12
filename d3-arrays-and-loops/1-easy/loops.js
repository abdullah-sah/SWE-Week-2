/*
declare a variable called task1 and assign the value of an empty array
write a for loop that pushes all from 0 to 10 to task1 
*/

let task1 = [];
for (let i = 0; i < 11; i++) {
	task1.push(i);
}

/*
declare a variable called task2 and assign the value of an empty array
write a for loop that pushes all from 10 to 0 to task2  (the order counts!)
*/

let task2 = [];
for (let i = 10; i >= 0; i--) {
	task2.push(i);
}
/*
declare a variable called task3 and assign the value of an empty array
write a for loop that pushes all even numbers from 1 to 20 task3
*/

let task3 = [];
for (let i = 1; i < 21; i++) {
	if (i % 2 === 0) task3.push(i);
}

// Test command (in terminal) "npm run test:d3:easy:loops"
module.exports = { task1, task2, task3 };
