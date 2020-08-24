function validAnagram (str1, str2) {
	// add whatever parameters you deem necessary - good luck!
	let frequencyCounter1 = {};
	let frequencyCounter2 = {};

	if (str1.length !== str2.length) {
		return false;
	}

	for (let key of str1) {
		frequencyCounter1[key] = (frequencyCounter1[key] || 0) + 1;
	}

	for (let key of str2) {
		frequencyCounter2[key] = (frequencyCounter2[key] || 0) + 1;
	}

	for (let key in frequencyCounter1) {
		if (frequencyCounter1[key] !== frequencyCounter2[key]) {
			return false;
		}
	}
	return true;
}

//Given two strings, whte a function to determine if the second string is an anagram of the first
//An anagram is a word, phrase or name formed by rearranging the letters of another, such as CINEMA, formed from ICEMAN.

//validAnagram('anagram','nagaram') //true
//validAnagram('aaz','zza') //false
