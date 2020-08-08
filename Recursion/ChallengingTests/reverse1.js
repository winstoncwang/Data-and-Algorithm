//reverse

//a recursive function called reverse which accepts a string and returns a new string in reverse.

//Example:
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

//string split method
function reverse (str) {
	if (str.length === 1) return str;
	let reverseStr = [];
	let arrStr = str.split('');
	reverseStr.push(arrStr.pop());
	return reverseStr.concat(reverse(arrStr.join(''))).join('');
}

//string.prototype.slice method

function reverse (str) {
	if (str.length === 0) return '';
	return str[str.length - 1].concat(reverse(str.slice(0, -1)));
}

reverse('rithmschool');
