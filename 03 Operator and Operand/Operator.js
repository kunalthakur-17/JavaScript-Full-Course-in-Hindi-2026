// 1. What is an Operator?
// An operator is a symbol used to perform an operation on values or variables.

// Examples: +, -, *, /, =, ==
let a = 10;
let b = 20;

console.log(a + b);


// Here, + is the operator.


// 1. Arithmetic Operators
// Used to perform mathematical calculations.
// Operator	Name	Example	Output
// +	Addition	10 + 5	15
// -	Subtraction	10 - 5	5
// *	Multiplication	10 * 5	50
// /	Division	10 / 5	2
// %	Modulus	10 % 3	1
// **	Exponentiation	2 ** 3	8
// ++	Increment	a++	Increases by 1
// --	Decrement	a--	Decreases by 1

// Example:

// let a = 10;
// let b = 3;

// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000


// 2. Assignment Operators
// Used to assign values to variables.
// Operator	Example	Same As
// =	a = 10	Assign 10
// +=	a += 5	a = a + 5
// -=	a -= 5	a = a - 5
// *=	a *= 5	a = a * 5
// /=	a /= 5	a = a / 5
// %=	a %= 5	a = a % 5
// **=	a **= 2	a = a ** 2

// Example:
// let a = 10;

// a += 5;
// console.log(a); // 15

// a -= 3;
// console.log(a); // 12

// a *= 2;
// console.log(a); // 24


// 3. Comparison Operators
// Used to compare two values. They return true or false.
// Operator	Name	Example	Output
// ==	Equal	10 == "10"	true
// ===	Strict equal	10 === "10"	false
// !=	Not equal	10 != 5	true
// !==	Strict not equal	10 !== "10"	true
// >	Greater than	10 > 5	true
// <	Less than	10 < 5	false
// >=	Greater or equal	10 >= 10	true
// <=	Less or equal	5 <= 10	true

{/* Example: */}
let a = 10;
let b = "10";

console.log(a == b);  // true
console.log(a === b); // false
console.log(a > 5);   // true
console.log(a < 5);   // false


{/* Important:
- == checks values after type conversion.
- === checks both value and data type.
4. Logical Operators
Used to combine multiple conditions.
Operator	Name	Example	Output
&&	AND	true && true	true
\|\|	OR	true \|\| false	true
!	NOT	!true	false */}

{/* Example: */}
let age = 27;
let hasID = true;

console.log(age >= 18 && hasID); // true

console.log(age < 18 || hasID); // true

console.log(!hasID); // false


{/* - AND (&&) → Both conditions must be true.
- OR (||) → At least one condition must be true.
- NOT (!) → Reverses the result.
5. Increment and Decrement Operators
Used to increase or decrease a variable by 1.
Operator	Meaning
++a	Pre-increment
a++	Post-increment
--a	Pre-decrement
a--	Post-decrement

Example: */}
let a = 10;

console.log(a++); // 10
console.log(a);   // 11

console.log(++a); // 12
console.log(a);   // 12


{/* Remember:
- Pre-increment: First increase, then use the value.
- Post-increment: First use the value, then increase.
6. Ternary Operator
Used as a shorter alternative to if...else.

Syntax:
condition ? value1 : value2; */}


{/* Example:
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result); */}





{/* 7. Type Operators
Used to check or identify types.
Operator	Purpose	Example
typeof	Checks data type	typeof 10
instanceof	Checks object instance	[] instanceof Array */}

Example:
console.log(typeof "Kunal"); // string

console.log(typeof 100); // number

console.log([] instanceof Array); // true





{/* Quick Revision – All Main Operators
Category	Operators
Arithmetic	+ - * / % ** ++ --
Assignment	= += -= *= /= %= **=
Comparison	== === != !== > < >= <=
Logical	&& \|\| !
Ternary	? :
Type	typeof, instanceof
Bitwise	& \| ^ ~ << >> >>>
Nullish	??
Optional chaining	?.
Spread / Rest	... */}