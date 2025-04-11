//  const showPrimes= (n) => {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       console.log( i ); // a prime
//     }
//   }

// showPrimes(20)


// const showPrimes = (n) => {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       console.log(i);  // a prime
//     }
//   }
  
//   const isPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

//   showPrimes(20);
//   isPrime(20)

// a function in JavaScript is a reusable 
// code designed to perform a particular task

// syntax of a function
// const functionName = (parameters) =>{
//     //code to be executed
// }

// const meet = (name) =>{
//     console.log("We shold meet on " +name + " today")
// }

// meet("google meet");
// meet("Friday");
// meet("Friday");
// meet("Saturday");
// meet("Sunday");

// function multiply(x, y) {
//     console.log(x * y);
// }

// multiply(5, 10);


// const sayHi = (name) => {
//     console.log("Hello " + name);
// }



// sayHi("VibeWithCode")



// const greet = (name, greeting) => {
//     console.log(`${greeting} ${name}`);
// }

// greet("Vibez", "Hello");

const getUser = (name, age) => ({
    name: name,
    age: age,
    intro(){
        return `${this.name} ${this.age}`;
    }
});

console.log(getUser("Warren", 21).intro());

// Warren 21
// { name: Warren, age: 21}

const scores = [12, 17, 60, 50];

const passed = scores.filter(score => score >=50)

console.log(passed);

const items = [100, 200, 300];

const total = items.reduce((sum, item) => sum + item);

console.log(total);