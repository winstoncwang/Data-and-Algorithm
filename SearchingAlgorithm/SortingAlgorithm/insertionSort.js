//INSERTION SORT

//This sorting algorithm works by going through every element, compare it against the previous element
//and place the element in the correct position on the left of the array.

function insertionSort (arr) {
	//main loop through the array, since we are comparing to the left side,
	//starting index 1.
	for (let i = 1; i < arr.length; i++) {
		//loop backwards to the most left position
		let currentVal = arr[i];
		let j;
		for (j = i - 1; j >= 0; j--) {
			//compare update the list by moving the larger number to the right
			if (currentVal < arr[j]) {
				arr[j + 1] = arr[j];
			}
			//if the currentVal is larger than the left hand side number
			//we found the place to insert the value
			if (currentVal > arr[j]) {
				break;
			}
		}

		//inserting val
		arr[j + 1] = currentVal;
	}
	return arr;
}

insertionSort([ 3, 4, 1, 5, 8, 6, 11, 7, 2, 9, 10 ]);
