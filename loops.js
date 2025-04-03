// for (let step = 0; step < 5; step++) {
//     console.log("Walking east one step");   
// }

// structure
// for (initialization; condition; increment) {
//     // code block to be executed
// }

// do ...while loop

// do
//   statement
// while(condition)

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

// for in
// for (variable in object){
//     statement
//  }
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
//   console.log(txt);
// }

// const student = {
//     name: "Isaac",
//     years: 20,
//     major: "Physics",
// };

// for (let key in student){
//     console.log(`${key}: ${student[key]}`);
// }

// for .. of loop

// for (variable of iterable){
//    statement
// }
    
const arr = [4, 5, 6];

for (const i in arr){
    console.log(i);
}

for (const i of arr){
    console.log(i);
}

