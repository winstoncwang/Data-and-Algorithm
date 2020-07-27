//FREQUENCY COUNTER - SAMEFREQUENCY

//write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//With time complexity: O(N)

// sample input:

//      sameFrequency(182,281) // true
//      sameFrequency(34,14) //false
//      sameFrequency(3589578, 5879385) //true
//      sameFrequency(22,222) //false

function sameFrequency (intA, intB) {
	//check length
	if (intA.toString().length !== intB.toString().length) {
		return false;
	}

	let frequencyCounterA = {};
	let frequencyCounterB = {};

	//count both strings
	for (let numA of intA.toString().split('')) {
		frequencyCounterA[numA] = (frequencyCounterA[numA] || 0) + 1;
	}

	for (let numB of intB.toString().split('')) {
		frequencyCounterB[numB] = (frequencyCounterB[numB] || 0) + 1;
	}

	//check both array
	for (let index in frequencyCounterA) {
		if (frequencyCounterA[index] !== frequencyCounterB[index]) {
			return false;
		}
	}

	return true;
	// good luck. Add any arguments you deem necessary.
}
