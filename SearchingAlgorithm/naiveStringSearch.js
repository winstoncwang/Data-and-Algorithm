//Naive String Search

//Note: this is the simplest algorithm, usually for smaller strings.

//The following solution uses sliding window pattern for
//searching substring inside a longer string.

function naiveSearch (str, sub) {
	let left = 0;

	while (left + 2 <= str.length - 1) {
		console.log(str.slice(left, left + sub.length));
		if (str.slice(left, left + sub.length) === sub) {
			return true;
		}
		left++;
	}
	return false;
}

naiveSearch('lorie loled', 'lol');
