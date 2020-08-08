//reverse

//a recursive function called reverse which accepts a string and returns a new string in reverse.

//Example:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse (str) {
	if (str.length === 1) return str;
	let reverseStr = [];
	let arrStr = str.split('');
	reverseStr.push(arrStr.pop());
	return reverseStr.concat(reverse(arrStr.join('')));
}

reverse('rithmschool')
