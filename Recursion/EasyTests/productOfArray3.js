//Product of Array

//write a function called productOfArray which takes in an array of numbers
//and return the product of them all.

//Example:

//productOfArray([1,2,3]) //6
//productOfArray([1,2,3,10]) //60

function productOfArray (arr) {
	if (arr.length === 1) return arr[0];
	return arr[0] * productOfArray(arr.slice(1));
}
