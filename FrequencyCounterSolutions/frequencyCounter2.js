// FREQUENCY COUNTER / MULTIPLE POINTERS - areThereDuplicates

//Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any
//duplicates among the arguments passed in. You can solve this using frequency counter pattern OR the multiple pointers pattern.

//Example

//      areThereDuplicates(1,2,3)   //false
//      areThereDuplicates(1,2,3,4,5,5,7)   //false
//      areThereDuplicates(1,2,2)   //true
//      areThereDuplicates('a','b','c','a') //true

//SOLUTION USING FREQUENCY COUNTER PATTERN

function areThereDuplicates () {
	let frequencyCounter = {};

	for (let value of arguments) {
		frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
	}

	for (let index in frequencyCounter) {
		if (frequencyCounter[index] > 1) {
			return true;
		}
	}

	return false;
}

//SOLUTION USING MULTIPLE POINTERS PATTERN

//assuming sorted array

function areThereDuplicates (...args) {
	let current = 0;
	let next = 1;

	args.sort((a, b) => {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	});

	console.log(args);

	for (let i = 0; i < args.length - 1; i++) {
		if (args[current] === args[next]) {
			return true;
		} else {
			current++;
			next++;
		}
	}
	return false;
}
