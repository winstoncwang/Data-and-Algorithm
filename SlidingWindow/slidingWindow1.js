//Sliding Window - maxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to
// the function. Note that a subarray must consist of consecutive elements from the
// original array. In the first example below, [100, 200, 300] is a subarray of the original array,
// but [100, 300] is not.

// maxSubarraySum([ 100, 200, 300, 400 ], 2);
// maxSubarraySum([ 1, 4, 2, 10, 23, 3, 1, 0, 20 ], 4);
// maxSubarraySum([ -3, 4, 0, -2, 6, -1 ], 2);
// maxSubarraySum([ 3, -2, 7, -4, 1, -1, 4, -2, 1 ], 2);
// maxSubarraySum([ 2, 3 ], 3);

function maxSubarraySum (arr, num) {
	//check the length is greater than the number passed
	if (arr.length < num) {
		return null;
	}

	let maxSum = 0;
	let tempSum = 0;
	//first sum the array of subarray
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;

	//perform the sliding window
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
}
