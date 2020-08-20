//stringifyNumbers

//write a function called stringifyNumbers which takes in an object and finds all
//of the values which are numbers and converts them to strings.

//Recursion would be a great way to solve this!

function stringifyNumbers (oldObj) {
	let newObj = {};
	//base condition
	if (Object.keys(oldObj).length === 0) return {};

	for (let obj in oldObj) {
		if (typeof oldObj[obj] === 'number') {
			//check if the value is num and convert to string and store in newObj
			newObj[obj] = oldObj[obj].toString();
		} else if (Array.isArray(oldObj[obj]) && oldObj[obj].length === 0) {
			//check array with zero length
			newObj[obj] = oldObj[obj];
		} else if (typeof oldObj[obj] === 'object') {
			//if object recursive solution
			newObj[obj] = stringifyNumbers(oldObj[obj]);
		} else {
			newObj[obj] = oldObj[obj];
		}
	}
	return newObj;
}

let obj = {
	num  : 1,
	test : [],
	data : {
		val  : 4,
		info : {
			isRight : true,
			random  : 66
		}
	}
};

stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
