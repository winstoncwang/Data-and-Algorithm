//capitalizeWords

//write a recursive function called capitalizeWords. Given an array of words, return a
//new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords (words) {
	let newWords = [];

	//base condition
	if (words.length === 0) return [];
	//cap and push to newWords (inital)
	newWords.push(words[0].toUpperCase());
	newWords.push(...capitalizeWords(words.slice(1)));

	return newWords;
}

let words = [ 'i', 'am', 'learning', 'recursion' ];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
