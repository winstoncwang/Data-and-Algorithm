//SELECTION SORT

//Selection sort defines a minimum value which is updated overtime by stepping through the
//array. If a new minimum value is found, an update is made until the end of the array.
//Hence we then swap the 'minimum' with the first value.

function selectionSort (arr) {
	let min = 0;
	//loops through the array with 'i' equal to the smallest value every pass
	for (let i = 0; i < arr.length; i++) {
		//assume the first value is smallest
		min = i;
		//loops through the rest of the array, comparing and swapping
		for (let j = i + 1; j < arr.length; j++) {
			//update minimum when smaller value found
			if (arr[j] < arr[min]) {
				//store the index
				min = j;
			}
		}
		//swap
		if (arr[min] !== arr[i]) {
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;
}

selectionSort([ 1, 4, 3, 5, 8, 6, 7 ]);

//es2015 syntax, implemented a swap function

function selectionSort (arr) {
	let min = 0;
	const swap = (arr, index1, index2) =>
		([ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]);

	//loops through the array with 'i' equal to the smallest value every pass
	for (let i = 0; i < arr.length; i++) {
		//assume the first value is smallest
		min = i;
		//loops through the rest of the array, comparing and swapping
		for (let j = i + 1; j < arr.length; j++) {
			//update minimum when smaller value found
			if (arr[j] < arr[min]) {
				//store the index
				min = j;
			}
		}
		//swap
		if (arr[min] !== arr[i]) {
			swap(arr, i, min);
		}
	}
	return arr;
}

selectionSort([ 1, 4, 3, 5, 8, 6, 7 ]);
