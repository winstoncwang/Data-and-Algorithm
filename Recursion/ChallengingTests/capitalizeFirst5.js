//capitalizeFirst

//write a recusive function called capitalizeFirst.
//Given an array of strings, capitalize the first letter of each
//string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst (arr) {
	let newArr = [];

	if (arr.length === 0) return '';

	if (arr[0][0] === arr[0][0].toUpperCase()) {
		newArr.concat(arr[0]);
	} else {
		newArr.push(arr[0][0].toUpperCase().concat(arr[0].slice(1)));
		newArr.push(...capitalizeFirst(arr.slice(1)));
	}

	return newArr;
}

capitalizeFirst([ 'car', 'taco', 'banana' ]);
