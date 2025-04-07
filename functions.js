// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// greet('Isaac');
// greet('Ibrah');
// greet('Kelvin');

// functions can be created and assigned to variable
// const greet = function(name){
//     console.log(`Hello ${name}`);
// }

// Parameters and arguments

// parameters are named variables that are used in the function 
// definition to accept input values when the function is called

// Arguments are the actual values passed to the function when it is called

// destructuring parameters
// it allows you to destructure objects and arrays directly in the function parameters
function personInfo({name, age}) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = {name: "Isaac", age: 20};
personInfo(person)

// destructuring arrays
function sum([a, b, c]){
    return a + b + c;
}

console.log(sum([2, 4, 10]))

//arrow function
// name is the parameter in greet1 function
const greet1 = (name) => {
    console.log(`Hello ${name}`);
}

greet1('Alice');

//functions with default parameters
function greet(name = "James") {
    console.log(`Hello ${name}`);
}

greet();
greet("Alice");


function add(a, b){
    return 20 % 2;
}

let results = add(2, 3);
console.log(results); 


// recursive function
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));


// anonymous function
setTimeout(function(){
    console.log("Hello after every 2 seconds");  
}, 2000);

// higher order function
function higherOrder(fn){
    return fn
}

higherOrder(()=> console.log("I am a function passed as an argument"));

// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);

// closures
function outer(){
    let counter = 0;

    return function inner(){
        counter++;
        console.log(counter);
        
    };
}

const counterFunc = outer();
counterFunc();
counterFunc();
counterFunc();


// arrow functions and parameters

const add1 = (a, b) => a + b;
console.log(add1(5, 10));

const greet2 = (name) => `Hello ${name}`;
console.log(greet2("Building"));

