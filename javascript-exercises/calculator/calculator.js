function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((sum, num) => sum + num, 0);	
}

function multiply (arr) {
	return arr.reduce((sum, num) => sum * num, 1);
}

function power(x, n) {
	return x ** n;
}

function factorial(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}