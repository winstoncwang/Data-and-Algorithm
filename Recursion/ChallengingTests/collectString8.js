//collectStrings

//write a function called collectStrings which accepts an object and returns
//an array of all the values in the object that have a typeof string.

function collectStrings (obj) {
	let newArr = [];

	//base condition
	if (Object.keys(obj).length === 0) return '';

	for (let key in obj) {
		//check if the value is string
		if (typeof obj[key] === 'string') {
			newArr.push(obj[key]);
		} else {
			newArr.push(...collectStrings(obj[key]));
		}
	}

	return newArr;
}

const obj = {
	stuff : 'foo',
	data  : {
		val : {
			thing : {
				info     : 'bar',
				moreInfo : {
					evenMoreInfo : {
						weMadeIt : 'baz'
					}
				}
			}
		}
	}
};

collectStrings(obj); // ["foo", "bar", "baz"])
