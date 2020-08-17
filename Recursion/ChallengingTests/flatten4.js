//flatten

//write a recursion function called flatten which accepts an array of arrays and returns a new array
//with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten (arr) {
	let newArr = [];

	//forEach the arr
	arr.forEach((el) => {
		//if the element is an array, recursive function using spread
		if (Array.isArray(el)) {
			newArr.push(...flatten(el));
			//otherwise push the result into the newArr
		} else {
			newArr.push(el);
		}
	});

	return newArr;
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
