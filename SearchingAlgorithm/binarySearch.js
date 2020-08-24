//Binary Search Exercise

//Write a function called binarySearch which accepts a sorted
//arry and a value and returns the index at which the value
//exists. Otherwise, return -1/

//Binary search should always be prioritised over sequential/linear search.
//Since it's O(log n) time complex and O(1) space complex
//Binary search essentially halves the search time after every loop of search.

function binarySearch (arr, num) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((right + left) / 2);
		if (arr[mid] === num) return mid;
		if (arr[mid] < num) {
			left = mid + 1;
		}
		if (arr[mid] > num) {
			right = mid - 1;
		}
	}

	return -1;
	// add whatever parameters you deem necessary - good luck!
}
