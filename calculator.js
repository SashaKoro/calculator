
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
	//Handled the operator stacking issue
	if ((val == " + " || val == " - " || val == " / " || val == " * ") && output.slice(-1) == " ") {
		output = output.slice(0, -3);                 
	}
	//Handled the period stacking issue
	if (val == "." && output.slice(-1) == ".") {
		output = output.slice(0, -1);
	}
	//Handled the zero stacking issue
	if (/^0$/.test(output) == true && (val != "." && val != " / " && val != " * " && val != " - " && val != " + ")) {
		output = "";
	}
	if (output.slice(-2) == " 0" && (val != "." && val != " / " && val != " * " && val != " - " && val != " + ")) {
		output = output.slice(0, -1);
	}
	//Handled output "leaking"
	if (String(output).length > 21) {
		val = "";
		output = ""; 
		document.getElementById("calc").style.background = "rgb(255, 25, 0)";
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
	if (output.slice(-1) === " ") {
		output = output.slice(0, -3);	
	}
	else {
		output = output.slice(0, -1);
	}
	document.getElementById("calc").innerHTML = output;
}

function Evaluate() {
	document.getElementById("calc").innerHTML = calculatorTest(output);
	output = eval(output);
	if (isNaN(output) === true) {
		output = Infinity;
	}
	output = String(output);
	impliedOverWrite = "maybe";
}

function calculatorTest(userInput) {
	if (userInput.slice(-1) === " " || userInput.slice(1, 2) == "/" || userInput.slice(1, 2) == "*" || userInput.slice(0,2) == ". " || userInput.slice(-2) == " ."  || / \. /.test(userInput) == true) {
		document.getElementById("calc").style.background = "rgb(255, 25, 0)";
	}
	if (userInput == "0 / 0") {
		userInput = Infinity;
		return userInput;
	}
	if (userInput != "") {
		userInput = eval(userInput);
		if (isNaN(userInput) === true) {
			userInput = Infinity;
		}
		return userInput;
	}
}

// Frankulator functions

var outputFrank = "";
var overWriteFrank = "";

function Frankulate(val) {
	val = inputCheck(val);
	outputFrank += val;
	document.getElementById("calcF").innerHTML = outputFrank;
}

function inputCheck(val) {
	if (overWriteFrank == "yes") {
		outputFrank = "";
		overWriteFrank = "";
	}
	//Period stack handling
	if (val == "." && outputFrank.slice(-1) == ".") {
		outputFrank = outputFrank.slice(0, -1);
	}
	//Multiple periods handling
	if (val == "." && /\./.test(outputFrank) == true) {
		val = "";
	}
	//Stacking zeroes at the start of input handling
	if(val != "." && /^0$/.test(outputFrank) == true) {
		outputFrank = "";
	}
	//Handled issue of input "leaking" out of the box
	if (String(outputFrank).length > 30) {
		val = "";
	}
	return val;
}

function userOutputFrank(visualOutput) {
	document.getElementById("calcF").innerHTML = visualOutput;
	outputFrank = String(outputFrank);
	overWriteFrank = "yes";
}

function frankClearAll() {
	outputFrank = "";
	document.getElementById("calcF").innerHTML = outputFrank;
}

function frankClearLast() {
	outputFrank = outputFrank.slice(0, -1);
	document.getElementById("calcF").innerHTML = outputFrank;	
}

//Functions linking the user input with the procedural functions and the user output 

function squareRootLink() {
	outputFrank = squareRootRun(outputFrank);
	userOutputFrank(outputFrank);
}
function squareLink() {
	outputFrank = squareRun(outputFrank);
	userOutputFrank(outputFrank);
}
function percentLink() {
	outputFrank = percentageRun(outputFrank);
	userOutputFrank(outputFrank);
}
function factorialLink() {
	outputFrank = factorialCheck(outputFrank);
	userOutputFrank(outputFrank);
}
function primeLink() {
	outputFrank = ifPrime(outputFrank);
	userOutputFrank(outputFrank);
}
function largestPrimeFactorLink() {
	outputFrank = largestPrimeFactorSearch(outputFrank);
	userOutputFrank(outputFrank);
}
function sumOfPrimesLink() {
	outputFrank = sumOfPrimesGenerator(outputFrank);
	userOutputFrank(outputFrank);
}
function triangularNumberLink() {
	outputFrank = triangularNumberGenerator(outputFrank);
	userOutputFrank(outputFrank);
}
function divisorCountLink() {
	outputFrank = divisorCounter(outputFrank);
	userOutputFrank(outputFrank);
}
function collatzCountLink() {
	outputFrank = collatzTry(outputFrank);
	userOutputFrank(outputFrank);
}
function fibonacciSumLink() {
	outputFrank = fibGenerator(outputFrank);
	userOutputFrank(outputFrank);
}
function digitSumLink() {
	outputFrank = digitSumCounter(outputFrank);
	userOutputFrank(outputFrank);
}

function semiPrimeLink() {
	outputFrank = semiPrimeGenerator(outputFrank);
	userOutputFrank(outputFrank);
}

function chenPrimeLink() {
	outputFrank = chenPrimeGenerator(outputFrank);
	userOutputFrank(outputFrank);
}

function goodPrimeLink() {
	outputFrank = goodPrimeGenerator(outputFrank);
	userOutputFrank(outputFrank);
}

//Procedural functions (checked by mocha)

function squareRootRun(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		if (/\+/.test(x) != true && /\-/.test(x) != true) {
		x = "";
		}
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	return Math.sqrt(x);
}

function squareRun(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		if (/\+/.test(x) != true && /\-/.test(x) != true) {
		x = "";
		}
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	return x *= x;
}

function percentageRun(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		if (/\-/.test(x) != true && /\+/.test(x) != true) {
		x = "";
		}
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	return (x /= 100);  
}

function factorialCheck(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}
	if (x === "") {
		x = "Please enter a number";
		return x;
	}
	if (String(x).length > 3) {
		return "Infinity";
	}
	x = Number(x);

	if (x === 0) {
		return 1;
	}
	var i = (x - 1);
	while (i > 1) {
		x *= i;
		i -= 1;
	}
	return x
}

function ifPrime(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 13) {
		x = "Sorry, number is too long";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}
	x = Number(x);
	if (x === 2 || x === 3) {
		x += " is prime";
		return x;
	}
	if (x === 1 || x % 2 === 0) {
		x += " is NOT prime";
		return x;
	}
	var i = 3;
	while (i <= (x / i)) {
		if (x % i === 0) {
			x += " is NOT prime";
			return x;
		}
		i += 2
	}
	x += " is prime";
	return x;
}

function largestPrimeFactorSearch(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 15) {      
		x = "Sorry, number is too long";
		return x;
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	var lastLargest = "No prime factor";
	var k = 2;
	while (k <= x / k) {  
		if (x % k === 0) {
			var otherFac = (x / k);
			if (ifPrime(k).slice(-8) === "is prime") {
					lastLargest = k;	
				}
			if (ifPrime(otherFac).slice(-8) === "is prime") {
				lastLargest = otherFac;
			}
		}
	k += 1;	
	}
	return lastLargest;
}

//Finds the sum of all primes below the given number
function sumOfPrimesGenerator(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 6) {          
		x = "Sorry, number is too long";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	if (x < 3) {
		return 0;
	}
	var totalSum = 0;
	var i = 3;
	while (i < x) {   
		if (ifPrime(i).slice(-8) === "is prime") {
			totalSum += i;
		}
	i += 2;
	}
	totalSum += 2;
	return totalSum
}

//Determines whether the number is a triangular number or not
function triangularNumberGenerator(x) {	
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (x === "") {
		return "Please enter a number";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}		
	if (String(x).length > 12) {      
		x = "Sorry, number is too long";
		return x;
	}
	x = Number(x);
	var triNum = 1;
	var triAdd = 2;
	while (x != triNum) {
		if (triNum > x) {
			return x + " is NOT tri";
		} 
		triNum += triAdd;
		triAdd += 1;
	}
	return x + " is a tri number";
}

//Counts all the divisors of a given number
function divisorCounter(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 16) {        
		x = "Sorry, number is too long";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}	
	x = Number(x);
	if (x === 0) {
		return "infinite number of divisors";
	}
	var m = 1;
	var divCount = 0;
	while (m <= x/m) {    
		if (x % m == 0) {
			if(m * m == x) {
				divCount -= 1;
			}
			divCount += 2;
		}
	m += 1;
	}
	return divCount;
}

//Determines how many steps it takes a number to reach 1 via the collatz conjecture
function collatzTry(x) {
	if (/\./.test(x) === true) {
		if (/\+/.test(x) != true) {
			x = "Number must be an Integer";
			return x;
		}
	}
	if (/[a-z]/i.test(x) === true || x === ".") {
		if (/\+/.test(x) != true) {
			x = "";
		}
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	if (x === 0) {
		return "Input must be a positive integer";
	}
	var steps = 0;
	while (x != 1) {
		if (x % 2 == 0) {
			x /= 2;
		} else {
			x = (x * 3) + 1;
		}
		steps += 1;
	}
	return steps;
}

//Calculates the sum of all fibonacci numbers below a given number
function fibGenerator(x) {
	if ( /[a-z]/i.test(x) === true || x === ".") {
		if (/\+/.test(x) != true) {
			x = "";
		}
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	var firstFib = 1;
	var secondFib = 0;
	var fib_Sum = 0;
	while (firstFib + secondFib < x) {
		firstFib += secondFib;
		secondFib = (firstFib - secondFib);
		fib_Sum += firstFib;
	}
	return fib_Sum;
}

//Calculates the sum of the digits of a number, eg: 456 becomes 4+5+6 = 15
function digitSumCounter(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (x === "") {
		return "Please enter a number";
	}
	x = Number(x);
	var dig_Sum = 0;
	var z = 0;
	for (var i = 0; i < (String(x).length); i ++) {
		if (String(x).charAt(i) != ".") {
			dig_Sum += parseInt(String(x).charAt(i));
		}	
	} 
	return dig_Sum;
}

//Determines whether the given number is semi prime or not
function semiPrimeGenerator(x) {
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}	
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (x === "") {
		return "Please enter a number";
	}	
	if (String(x).length > 12) {     
		x = "Sorry, number is too long";
		return x;
	}
	x = Number(x);
	if (x < 4) {
		x += " is NOT a semiprime";
		return x;
	}
	var firstFactor = 1;
	while (firstFactor <= x / firstFactor) {   
		if (ifPrime(firstFactor).slice(-8) === "is prime") {
			if (x % firstFactor === 0) {
				var otherFactor = (x / firstFactor);
				if(ifPrime(otherFactor).slice(-8) === "is prime") {
					x += " is a semiprime";
					return x;
				}
			}
		}
	firstFactor += 1;
	}
	x += " is NOT a semiprime";
	return x;
}

//Determines whether the given number is a chen prime
function chenPrimeGenerator(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 13) {
		x = "Sorry, number is too long";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}	
	x = Number(x);
	if (x < 2) {
		x += " is NOT prime";
		return x;
	}
	if (ifPrime(x).slice(-8) === "is prime") {
		if (ifPrime(x + 2).slice(-8) === "is prime" || semiPrimeGenerator(x + 2).slice(-14) === "is a semiprime") {
			x += " is a chenprime";
			return x;
		}
		x += " is a non-chen prime";
		return x;
	}
	x += " is NOT prime";
	return x;
}

//Determines whether the given number is a good prime
function goodPrimeGenerator(x) {
	if (/[a-z]/i.test(x) === true || x === ".") {
		x = "";
	}
	if (String(x).length > 15) {
		x = "Sorry, number is too long";
		return x;
	}
	if (x === "") {
		return "Please enter a number";
	}
	if (/\./.test(x) === true) {
		x = "Number must be an Integer";
		return x;
	}	
	x = Number(x);
	if (x < 2) {
		x += " is NOT prime";
		return x;
	}
	if (ifPrime(x).slice(-8) !== "is prime") {
		x += " is NOT prime";
		return x;
	}
	var spot = x + 1;
	while (ifPrime(spot).slice(-8) !== "is prime") {
		spot += 1;
	}
	var secondSpot = spot + 1;
	while (ifPrime(secondSpot).slice(-8) !== "is prime") {
		secondSpot += 1;
	}
	var thirdSpot = x - 1;
	while (ifPrime(thirdSpot).slice(-8) !== "is prime") {
		thirdSpot -= 1;
		if (thirdSpot == 0) {
			x += " is a non-good prime";
			return x;
		}
	}
	var fourthSpot = thirdSpot - 1;
	while (ifPrime(fourthSpot).slice(-8) !== "is prime") {
		fourthSpot -= 1;
		if (fourthSpot == 0) {
			x += " is a non-good prime";
			return x;
		}
	}
	if (x * x > spot * thirdSpot && x * x > secondSpot * fourthSpot) {
		x += " is a good prime";
		return x; 
	}
	x += " is a non-good prime";
	return x;
}