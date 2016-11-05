
//Calculator functions

var output = "";
var impliedOverWrite = "no";

function takeInput(val) {

	document.getElementById("calc").style.background = "rgb(198, 254, 202)";
	//Overwriting or not overwriting last output depending on whether user chooses a number or an operator as their next input
	if (impliedOverWrite == 'maybe') {                                     
		if (val != " + " && val != " - " && val != " / " && val != " * ") {
			output = "";
			
		}
		impliedOverWrite = "no";
	}
	// Handled the operator stacking issue
	if ((val == " + " || val == " - " || val == " / " || val == " * ") && output.slice(-1) == " ") {
		output = output.slice(0, -3);                 
	}
	//Handled the period stacking issue
	if (val == "." && output.slice(-1) == ".") {
		output = output.slice(0, -1);
	}
	//Handled the zero stacking issue at the front of the string
	if (val == 0  && output == "") {
		val = "";
	}
	//Handled the zero stacking issue after an operator
	if (val == 0 && output.slice(-1) == ' ') {
		val = "";
	}

	output += val;
    document.getElementById("calc").innerHTML = output;

}

function ClearAll() {

	document.getElementById("calc").style.background = "rgb(198, 254, 202)";
	output = "";
	document.getElementById("calc").innerHTML = output;
}

function ClearLast() {

	document.getElementById("calc").style.background = "rgb(198, 254, 202)";
	//Checks if last input was operator or not, and slices accordingly
	if (output.slice(-1) === " ") {
		output = output.slice(0, -3);	
	}
	else {
		output = output.slice(0, -1);
	}
	document.getElementById("calc").innerHTML = output;
}

function Evaluate() {
	//Displays error cases to the user
	if (output.slice(-1) === " " || output.slice(1, 2) == "/" || output.slice(1, 2) == "*" || output.slice(0,2) == ". " || output.slice(-2) == " ."  || / \. /.test(output) == true) {
		document.getElementById("calc").style.background = "rgb(255, 25, 0)";
	}
	if (output != "") {
	document.getElementById("calc").innerHTML = eval(output);
	output = eval(output);
	output = String(output);
	impliedOverWrite = "maybe";
	}
}

// Frankulator functions

var outputFrank = "";
var overWriteFrank = "";

function Frankulate(val) {

	if (overWriteFrank == "yes") {
		outputFrank = "";
		overWriteFrank = "";
	}
	//Period stack handling
	if (val == "." && outputFrank.slice(-1) == ".") {
		outputFrank = outputFrank.slice(0, -1);
	}

	outputFrank += val;
	document.getElementById("calcF").innerHTML = outputFrank;
}

function frankClearAll() {
	outputFrank = "";
	document.getElementById("calcF").innerHTML = outputFrank;
}

function frankClearLast() {
	outputFrank = outputFrank.slice(0, -1);
	document.getElementById("calcF").innerHTML = outputFrank;	
}

function sqRt() {
	outputFrank = Math.sqrt(outputFrank);
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function square() {
	outputFrank *= outputFrank;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function percentage() {
	outputFrank /= 100;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function factorial() {
	var j = outputFrank - 1; 
	while (j > 1) {
		outputFrank *= j;
		j -= 1;
	}
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function ifPrime(x) {
	//Four base cases handled (0,1,2,3) so I could run the i <= (x/i) loop while increasing i by two. This improved speed greatly.
	if (x == 2 || x == 3) {
		x += " is prime";
		return x;
	}
	if (x == 1 || x % 2 == 0) {
		x += " is NOT prime";
		return x;
	}
	var i = 3;
	while (i <= (x / i)) {
		if (x % i == 0) {
			x += " is NOT prime";
			return x;
		}
		i += 2
	}
	x += " is prime";
	return x;
}

function primeLink() {

	outputFrank = ifPrime(outputFrank);
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function largestPrimeFactor() {
	var lastLargest = 0;
	var k = 3;
	while (k <= (outputFrank / k)) {
		if ( ifPrime(k).slice(-9) != "NOT prime") {
			if (outputFrank % k == 0) {
				lastLargest = k;
			}			
		}
	k += 2;
	}
	outputFrank = lastLargest;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";

}

//function finds the sum of all primes below the given number
function sumOfPrimes() {
	var totalSum = 0;
	var l = 3;
	while (l < outputFrank) {
		if ( ifPrime(l).slice(-9) != "NOT prime") {
			totalSum += l;
		}
	l += 2;
	}
	outputFrank = totalSum + 2;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function triangularNumberGenerator(tr) {
	triNum = 1;
	triAdd = 2;
	while (tr != triNum) {
		if (triNum > tr) {
			return tr + " is NOT tri";
		} 
		triNum += triAdd;
		triAdd += 1;
	}
	return tr + " is a tri number";
}

//Determines whether the number is a triangular number via the Generator function above
function triangularNumber() {

	outputFrank = triangularNumberGenerator(outputFrank);
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

//Counts all the divisors of a given number
function divisorCount() {
	var m = 1;
	var divCount = 0;
	while (m <= outputFrank) {
		if (outputFrank % m == 0) {
			divCount += 1;
		}
	m += 1;
	}
	outputFrank = divCount;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

//Determines how many steps it takes a number to reach 1 via the collatz conjecture
function collatz_count() {
	var steps = 0;
	while (outputFrank != 1) {
		if (outputFrank % 2 == 0) {
			outputFrank /= 2;
		} else {
			outputFrank = (outputFrank * 3) + 1;
		}
		steps += 1;
	}

	outputFrank = steps;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

//Outputs the sum of all fibonacci numbers below a given number
function fibonacci_sum() {
	var firstFib = 1;
	var secondFib = 0;
	var fib_Sum = 0;
	while (firstFib + secondFib < outputFrank) {
		firstFib += secondFib;
		secondFib = (firstFib - secondFib);
		fib_Sum += firstFib;
	}

	outputFrank = fib_Sum;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

//Outputs the sum of the digits of a number, eg: 456 becomes 4+5+6 = 15
function digitSum() {
	var dig_Sum = 0;
	var z = 0;
	while (z < parseInt(String(outputFrank).length)) {
		dig_Sum += parseInt(outputFrank.charAt(z));
		z += 1;
	}

	outputFrank = dig_Sum;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function squareDigitChain() {
	var chainCount = 0;
	while (outputFrank != 1) {
		outputFrank = squareSum(outputFrank);  // <<< problem with this line			 
		chainCount += 1;
	}

	outputFrank = chainCount;
	document.getElementById("calcF").innerHTML = outputFrank;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function squareSum(u) {
	var sumofSquares = 0;
	var position = 0;
	while (position < parseInt(String(u).length)) {
		sumofSquares += (parseInt(u.charAt(position)) ** 2)
		position += 1;
	}
	return sumofSquares;
}


