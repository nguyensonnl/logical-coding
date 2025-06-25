//1. basic
function sayHello(){
	console.log("Hello world");
}

//2. fnction with parameter
function getName(name){
	console.log(`Hello ${name}`)
}

//3. return values
function add(a,b){
	return a + b;
}
const result = add(10.5)

//4. default parameters
function greet(name = "ngọc huyền"){
	console.log("Hello" + name);
}

//5. docstrings
/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  return a + b;
}

//6. variable scope
let a = 10;
function addNumber(){
	let b = 5;
	console.log(a + b);
}

//7. recursion
function factorial(n){
	return n == 0 ? 1 : n*factorial(n-1)
}

//8. lambda functions: arrorw function
const addNumber = (a, b) => a + b;

//9. function decorators
function decorator(func){
	function wrapper(){
		console.log("Something is happening before the function is called.");
		func();
		console.log("Something is happening after the function is called.");
	}
	return wrapper;
}
@decorator
function sayHello(){
	console.log("Hello):
}

//10. advanced functions in python, in js is callback
function apply(func, x){
	return func(x);
}

function square(x){
	return x**2;
}
let result = apply(square, 5)