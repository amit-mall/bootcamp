// let x = 10;
// x = 20; // This is allowed

// if (true) {
//     let y = 30;
//     console.log(y); // 30
// }

// console.log(y); // Error: ReferenceError: y is not defined

// const z = 10;
// z = 20; // Error: Assignment to constant variable
// console.log(z)




// function example() {
//     let x = 10;
//     if (true) {
//         let y = 20; 
//         console.log(x); // 10, 
//         console.log(y); // 20, 
//     }
//     console.log(x); // 10
//     console.log(y); // ReferenceError: y is not defined
// }
// example();


// const arr = [1, 2, 3];
// const [a, b, c] = arr;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3


// const person_one = { name: 'amit', age: 10 };
// const { name, age } = person_one;

// console.log(name); // Amit
// console.log(age);  // 10

// //we can also change the name of local variable

// const { name:new_name, age:actual_age } = person_one;

// console.log(new_name); // Amit
// console.log(actual_age);  // 10


// let person1 = "Amit";
// let person2 = "Jon";

// [person2, person1] = [person1, person2]


// console.log(person1); // "Jon"
// console.log(person2); // "Amit"


// const numbersList = [1, 2, 3];
// const newNumbers = [...numbersList, 4, 5]; 
// console.log(newNumbers); // Output: [1, 2, 3, 4, 5]


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// const personTwo = { name: "John", age: 30 };
// const newPerson = { ...personTwo, city: "New York" };

// console.log(newPerson); // Output: { name: "John", age: 30, city: "New York" }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 } (b will be overwritten)


// function sum(a, b, c) {
//     return a + b + c;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6


// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Output: 8


// const person = {
//     name: "Amit",
//     sayHello: function () {
//         setTimeout(() => {
//             console.log(`Hello, my name is ${this.name}`);
//         }, 1000);
//     }
// };

// person.sayHello(); // Output: Hello, my name is Amit