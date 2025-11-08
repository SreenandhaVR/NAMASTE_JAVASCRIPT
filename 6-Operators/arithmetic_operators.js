// JavaScript Operators
// Operators perform actions on variables and values

// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponent:", a ** b);

console.log("Post Increment:", a++);
console.log("Post Decrement:", b--);
console.log("After Increment:", a);
console.log("After Decrement:", b);

// Assignment Operators
a += b;
b -= 2;
console.log("Updated a:", a);
console.log("Updated b:", b);

// Unary Operators
let c = 15;
console.log("Negation:", -c);
console.log("Positive:", +c);

// Comparison Operators
let x = 10;
let y = 20;

console.log("Equal (==):", x == y);
console.log("Not Equal (!=):", x != y);
console.log("Strict Equal (===):", x === y);
console.log("Strict Not Equal (!==):", x !== y);
console.log("Greater Than (>):", x > y);
console.log("Less Than (<):", x < y);
console.log("Greater or Equal (>=):", x >= y);
console.log("Less or Equal (<=):", x <= y);

// Logical Operators
let condition1 = true;
let condition2 = false;

console.log("AND:", condition1 && condition2);
console.log("OR:", condition1 || condition2);
console.log("NOT:", !condition1);

// Bitwise Operators
let bitA = 5;
let bitB = 3;

console.log("Bitwise AND:", bitA & bitB);
console.log("Bitwise OR:", bitA | bitB);
console.log("Bitwise XOR:", bitA ^ bitB);
console.log("Bitwise NOT:", ~bitA);
console.log("Left Shift:", bitA << 1);
console.log("Right Shift:", bitA >> 1);

// Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
