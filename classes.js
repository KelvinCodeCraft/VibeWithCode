class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("Samuel", 20);
console.log(person1.greet());
const person3 = new Person("Ibrah", 20);
console.log(person3.greet());


// inheritance in javascript OOP
class Employee extends Person {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }

    work(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old and I work as a ${this.job}.`;
    }
}

const empl1 = new Employee("Ibrah", 20, "Software Engineer");
console.log(empl1.work());

console.log(empl1.greet());

// //inheritance in javascript OOP
// //parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(){
        return `${this.name} makes a noise.`;
    }
}

//child class

class Dog extends Animal {
    constructor (name, breed){
        super(name);
        this.breed = breed;
    }

    speak(){
        return `${this.name} bark and ${this.breed} is the breed.`;
    }
}

const ourDog = new Dog("Rex", "Labrador");
console.log(ourDog.speak());

class Cat extends Animal {
    constructor(name, sound, color){
        super(name);
        this.sound = sound;
        this.color = color;
    }

    speak(){
        return `${this.name}  produces ${this.sound} it is ${this.color}.`;
    }
}

const ourCat = new Cat("Ruiru", "meow", "black");
console.log(ourCat.speak());



class Person5 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// //you create the instance of the object
const person4 = new Person5("Samuel", 20);
console.log(person4.greet());

//Encapsulation in javascript OOP
// Encapsulation is the bundling of data and methods that operate on that data within one unit, such as a class. 
// It restricts direct access to some of an object's components and can prevent the accidental modification of data.
// class Car {
//     constructor(brand, price){
//         this.brand = brand;
//         this._price = price;
//     }
    
//     // get price allows reading _price in a controlled way
//     get price(){  //getter method
//         return `$${this._price}`;
//     }
   

//     //set price allows data validation before setting _price
//     set price(newPrice){  //setter method
//         if (newPrice > 0) {
//             this._price = newPrice;
//         } 
//         else {
//             console.log("Price must be positive.");
//         }
//     }
// }

// const myCar = new Car("Range Rover Velar", 9000000);
// console.log(myCar.price);


// // second encapsulaton example

// class Person {
//     constructor(name, age){
//         this._name = name;
//         this._age = age; // underscore indicates private property
//     }

//     get name(){
//         return this._name;
//     }

//     set name(newName){
//         if (typeof newName === "string"){
//             this._name = newName;
//         } else {
//             throw new Error("name must be a string.");
//         }
//     }

//     get age(){
//         return this._age;
//     }

//     set age(newage){
//         if(typeof newage === "number" && newage > 0){
//             this._age = newage;
//         } else {
//             throw new Error("age must be a positive number.");
//         }
//     }
// }

// const person = new Person();

// person.name = "Samuel";
// person.age = 45;

// console.log(person.name);
// console.log(person.age);



//Polymorphism
// class Animal {
//     speak() {
//         console.log("Animal speaks");
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log("Cat meows");
//     }
// }

// const animals = [new Dog(), new Cat()];
// animals.forEach(animal => animal.speak());

// //polymorphism

// class Shape {
//     draw(){
//         console.log("Drawing a shape");
        
//     }
// }

// class Circle extends Shape {
//     draw(){
//         console.log("Drawing a circle");
//     }
// }

// class REctangle extends Shape {
//     draw(){
//         console.log("Drawing a rectangle");
//     }
// }

// const shapes = [new Circle(), new REctangle()];
// shapes.forEach(shape => shape.draw());


// class Car {
//     drive(){
//         console.log("Driving a car");
//     }
// }

// class Boat {
//     drive(){
//         console.log("Driving a boat");
//     }
// }

// class Airplane {
//     drive(){
//         console.log("Driving an airplane");
//     }
// }

// function testDrive(vehicle){
//     vehicle.drive();
// }

// const car = new Car();
// const boat = new Boat();
// const airplane = new Airplane();

// testDrive(car);
// testDrive(boat);
// testDrive(airplane);