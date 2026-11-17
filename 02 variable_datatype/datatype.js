// Interview Answer
// Data types define the type of value a variable can store. JavaScript has two main categories: primitive and non-primitive data types.

// Remember:
// - Primitive → String, Number, Boolean, Undefined, Null, BigInt, Symbol.
// - Non-primitive → Object, Array, Function.

// Primitive data type


// 1. String
// Used to store text.

// let name = "Kunal";
// let city = 'Palampur';

// console.log(name);
// console.log(city);


// 2. Number
// Used to store integer and decimal numbers.
// let age = 27;
// let salary = 25000.50;

// console.log(age);
// console.log(salary);


// 3. Boolean
// Stores either true or false.
// let isLogin = true;
// let isAdmin = false;

// console.log(isLogin);
// console.log(isAdmin);


// 4. Undefined
// A variable is declared but no value is assigned.
// let x;

// console.log(x); // undefined

// 5. Null
// Represents an intentional absence of a value.
// let user = null;

// console.log(user); // null

// 6. BigInt
// Used to store very large integer numbers.
// let number = 12345678901234567890n;

// console.log(number);

// 7. Symbol
// Used to create unique values.
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 === id2); // false



// Non-primitive
// 1. Object
// Used to store data in key-value pairs.
// let student = {
//     name: "Kunal",
//     age: 27,
//     city: "Palampur"
// };

// console.log(student.name);
// console.log(student.age);


// 2. Array
// Used to store multiple values in a single variable.
// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits);
// console.log(fruits[0]); // Apple


// 3. Function
// A function is a reusable block of code.
// function greet() {
//     console.log("Hello Kunal");
// }

// greet();