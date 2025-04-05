// for (let step = 0; step < 5; step++) {
//     console.log("Walking east one step");   0,1,2,3,4
//                                             1,2,3,4,5
// }

// structure
// for(initializing; condition; iteration){
//     // code execution
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }


// let fruits = ["banana", "apple", "orange", "mango"];

// for (let i =0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let i = 1; i<=10 ;i++){
//     if(i === 6){ //exit the loop when i is 6
//         break;
//     }
//     console.log(i);
    
// }

// for(let i = 1; i<=5 ;i++){
//     if(i === 3){ //skip the iteration when i is 3
//         continue;
//     }
//     console.log(i);
    
// }
// do ...while loop

// do
//   statement
// while(condition)

// let count = 0;

// do {
//     console.log("Count is: " + count);
//     count++;
// } while (count < 5);

// let sum = 0;
// let number = 1;

// do {
//     sum += number;   //sum = sum + number
//     number++
// } while (number <= 5);  0, 0+1, 1+2, 3+3, 6+4, 10+5

// console.log("Sum is: " + sum); // 15

// let count1 = 5;

// do {
//     console.log(count1);
//     count1--;
// } while (count1 > 0)


// let i = 1;
// do{
//     i += 1;
//     console.log(i)
// } while (i < 6);

// while loop

// while(condition)
//     statement

// let n = 0;

// let x = 0;

// while (n < 3) {
//     n++;
//     x += n;
//     // n = 1, 2, 3

//     // n = 2
//     // x = 2 + 1 = 3
//     // x = 3 + 3 = 6

//     console.log(n, x);
    
// }


//for ... in
// for (let key in object) {
//     //execute code block
//     console.log(key);
//     console.log(object[key]);
// }

// const person = {
//     name: "Kelvin",
//     age: 20,
//     role: "Developer"
// };

// for (let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// const arr = [10, 20, 30];

// const user = { name: "Ibrah", age: 20};

// for (let key in user){
//     console.log(`${key}: ${user[key]}`);
    
// }

// for(let index in arr) {
//     console.log(index);  //0, 1, 2
//     console.log(arr[index]); //10, 20, 30    
// }

// for (let value of arr) {
//     console.log(value);
    
// }


// for ...of

//iterate over values in iterable objects

// const arr1 = [1, 2, 3];

// for (let value of arr1){
//     console.log(value);  
// }

// while loop
// let i = 0;

// while(i < 5) {
//     console.log(i);
//     i++
// }

// let attempts = 1;

// while (true) {
//     attempts++;
//     if (attempts === 3) {
//         console.log("Stopping after 3 attempts");
//         break;
//     }
// }

// // do while

// let i = 0;

// do {
//     console.log(i);
//     i++
// } while (i < 5)