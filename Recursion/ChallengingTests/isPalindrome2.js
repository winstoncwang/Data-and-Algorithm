//isPalindrome

//write a recursive function called isPalindrome which returns true if the string passed to
//it is a palindrome (reads the same forward and backward.) Otherwise it returns false.

function isPalindrome (str) {
	if (str <= 1) return true;
	if (str[0] === str.slice(-1)) {
		return isPalindrome(str.slice(1, -1));
	} else {
		return false;
	}
}

isPalindrome('amanaplanacanalpandemonium');

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
