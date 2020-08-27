//BUBBLE SORT

//Basic bubble sort, O(n^2) time complexity. Very basic sorting algorithm,
//slowest compared to other sorting algorithm. Optimisation can be made to
//bubble sort by adding a flag which skips the comparison/swap if already
//in order

function bubbleSort (arr) {
	//outer loop loops backwards
	for (let i = arr.length - 1; i >= 0; i--) {
		//inner loop loops forwards
		for (let j = 0; j < i; j++) {
			//swaps
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

bubbleSort([ 3, 5, 1, 18, 93, 23, 45, 10, 75, 99, 120, 100, 34 ]);

//Optimised Bubble Sort
//This prevents any comparisons for numbers in ascending order

function bubbleSort (arr) {
	//outer loop loops backwards
	for (let i = arr.length - 1; i >= 0; i--) {
		let noSwaps = true;
		//inner loop loops forwards
		for (let j = 0; j < i; j++) {
			//swaps
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}

	return arr;
}

bubbleSort([ 3, 5, 1, 18, 93, 23, 45, 10, 75, 99, 120, 100, 34 ]);
