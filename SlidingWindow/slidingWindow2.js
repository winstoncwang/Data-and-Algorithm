//Sliding Window - minSubArrayLen

//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
//This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//Example:
//minSubArrayLen([2,3,1,2,4,3],7)
//minSubArrayLen([2,1,6,5,4],9)
//minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)
//minSubArrayLen([1,4,16,22,5,7,8,9,10],39)
//minSubArrayLen([1,4,16,22,5,7,8,9,10],55)
//minSubArrayLen([4,3,3,8,1,2,3],11)
//minSubArrayLen([1,4,16,22,5,7,8,9,10],95)

function minSubArrayLen (arr, sum) {
	//check the total sum first
	let arraySum = arr.reduce((acc, val) => {
		return acc + val;
	});

	if (arraySum < sum) return 0;

	let start = 0;
	let end = 0;
	let total = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		//if the current total is smaller than sum, expand the window to the right
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;

			// if the total is larger or equal to the sum, reduce the window size from the start
		} else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= arr[start];
			start++;
			//break out of the while loop when the end of the array has been reached
		} else {
			break;
		}
	}
	return minLen;
}
