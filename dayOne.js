
//1122 = 3
//1111 = 4
//91212129 = 9
/**
'find the sum of all digits that match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in the list.'
**/
//node dayOne.js <input here>

var myArgs = process.argv.slice(2);

var doubles = doubled(myArgs);
var sum = doubles.reduce(adding);
console.log(sum);

function doubled(myArgs) {

	let input = myArgs.toString().split('');
	let strLen = input.length;
	var doubles = [];

	for(let i=0; i<strLen; i++) {
		if(input[i] == input[i+1]) {
			doubles.push(parseInt(input[i]));
		}
	}
	
	if(input[0] == input[strLen-1]) {
		doubles.push(parseInt(input[0]));
	}
	return doubles;
}

function adding(a,b) {
	let check = a+b;
	return check;
}