// Sliding window - findLongestSubstring

//write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters/

//Example:

//findLongestSubstring('') //0
//findLongestSubstring('riti') //1
//findLongestSubstring('rithmschool') //7
//findLongestSubstring('thisisawesome') //6
//findLongestSubstring('thecatinthehat') //7
//findLongestSubstring('bbbbbb') //1
//findLongestSubstring('longestsubstring') //8
//findLongestSubstring('thisishowwedoit') //6

//time complexity - O(n)

function findLongestSubstring (str) {
	let start = 0;
	let end = 0;
	let maxLen = -Infinity;
	let charCounter = {};

	if (str.length === 0) return 0;

	while (end < str.length) {
		if (!charCounter[str[end]]) {
			charCounter[str[end]] = (charCounter[str[end]] || 0) + 1;
			end++;
			maxLen = Math.max(maxLen, end - start);
		} else if (charCounter[str[end]] >= 1) {
			delete charCounter[str[start]];
			start++;
		}

		if (end >= str.length) {
			break;
		}
	}

	return maxLen;
}
