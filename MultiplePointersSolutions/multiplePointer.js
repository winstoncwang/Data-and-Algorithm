function countUniqueValues (arr) {
	// add whatever parameters you deem necessary - good luck!
	let p1 = 0;
	let p2 = 1;

	if (arr.length === 0) {
		return 0;
	}

	while (p2 < arr.length) {
		if (arr[p1] === arr[p2]) {
			p2++;
		} else if (arr[p1] !== arr[p2]) {
			p1++;
			arr[p1] = arr[p2];
			p2++;
		}
	}
	return p1 + 1;
}

//The function should accept a sorted array, and counts the unique values in the array. There
//can be negative numbers in the array, but it will always be sorted.

//it must be with O(1) space and O(n) time
