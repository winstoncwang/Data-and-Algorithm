//nestedEvenSum

//Write a recursive function called nestedEvenSum.
//Return the sum of all even numbers in an object which may
//contain nested objects.

function nestedEvenSum (newObj) {
	let evenSum = 0;

	//base condition
	if (Object.keys(newObj).length === 0) return {};

	for (obj in newObj) {
		//check if the key value is a number
		if (typeof newObj[obj] === 'number') {
			//check if the number is even
			if (newObj[obj] % 2 === 0) {
				evenSum += newObj[obj];
			}
			//remove the key-value pair
			delete newObj[obj];
		}
		if (typeof newObj[obj] === 'object') {
			//updated input
			evenSum += nestedEvenSum(newObj[obj]);
		}
	}

	return evenSum;
}

var obj1 = {
	outer : 2,
	obj   : {
		inner    : 2,
		otherObj : {
			superInner     : 2,
			notANumber     : true,
			alsoNotANumber : 'yup'
		}
	}
};

var obj2 = {
	a : 2,
	b : { b: 2, bb: { b: 3, bb: { b: 2 } } },
	c : { c: { c: 2 }, cc: 'ball', ccc: 5 },
	d : 1,
	e : { e: { e: 2 }, ee: 'car' }
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
