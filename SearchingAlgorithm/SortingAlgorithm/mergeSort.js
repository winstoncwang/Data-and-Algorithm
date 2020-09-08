//MERGE SORT

//MERGE ARRAY function is implemented before the whole sort is completed

function mergeArray (arr1, arr2) {
	let newArr = [];
	//pointer
	let point1 = 0;
	let point2 = 0;

	while (point1 < arr1.length && point2 < arr2.length) {
		if (arr1[point1] <= arr2[point2]) {
			newArr.push(arr1[point1]);
			point1++;
		} else {
			newArr.push(arr2[point2]);
			point2++;
		}
	}

	if (point1 === arr1.length) {
		newArr.push(...arr2.slice(point2));
	}

	if (point2 === arr2.length) {
		newArr.push(...arr1.slice(point1));
	}

	return newArr;
}

//mergeArray([ 1, 10, 40 ], [ 2, 14, 99, 100 ]);

function mergeSort (arr) {
	if (arr.length <= 1) return arr;

	let mid = Math.floor(arr.length / 2);

	//recursion on first/second half until arr passed on is less or equal to 1 using mergeSort
	let firstHalf = mergeSort(arr.slice(0, mid));
	let secondHalf = mergeSort(arr.slice(mid));

	//merge the array using first/second half
	return mergeArray(firstHalf, secondHalf);
}

mergeSort([ 1, 10, 40, 2, 14, 99, 100 ]);
