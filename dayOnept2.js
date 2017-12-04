
//1212 = 6;
//1221 = 0
//123123 = 12
/**
check if the digit halfway around the circular list matches**/
//node dayOnept2.js <input here>

var myArgs = process.argv.slice(2);

var doubles = doubled(myArgs);

var sum = doubles.reduce(adding);
console.log(sum);

function doubled(myArgs) {

	let input = myArgs.toString().split('');
	let strLen = input.length;
	let strHalf = strLen/2;
	var doubles = [];

	for(let i=0; i<strLen; i++) {
		if(input[i] == input[(i+strHalf)%strLen]) {
			doubles.push(parseInt(input[i]));
		}
	}

	if(doubles.length < 1) {
		doubles[0] = 0;
	}
	return doubles;
}

function adding(a,b) {
	let check = a+b;
	return check;
}