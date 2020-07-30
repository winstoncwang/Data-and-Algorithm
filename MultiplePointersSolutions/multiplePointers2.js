//Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string, without their order changing.

//isSubsequence('hello','hello world'); //true
//isSubsequence('sing','sting'); //true
//isSubsequence('abc','abracadabra'); //true
//isSubsequence('abc','acb'); //false

function isSubsequence (...args) {
	let pointer = 0;

	for (let i = 0; i < args[1].length; i++) {
		if (args[0][pointer] === args[1][i]) {
			pointer++;
		}
	}
	if (pointer === args[0].length) {
		return true;
	}
	return false;
}
