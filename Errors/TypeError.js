// typeError.js
// TypeError occurs when an operation is performed on a value of the wrong type
// or when you try to modify a value that cannot be changed.

// Example 1: Reassigning a constant variable
const pi = 3.14;
pi = 3.142; //  TypeError: Assignment to constant variable

// Example 2: Calling a method on an undefined value
let name;
console.log(name.toUpperCase()); //  TypeError: Cannot read properties of undefined

// Example 3: Accessing a property of null
let user = null;
console.log(user.age); //  TypeError: Cannot read properties of null

// Example 4: Trying to call a non-function value
let greet = "Hello";
greet(); //  TypeError: greet is not a function

// Example 5: Modifying a read-only property (in strict mode)
// 'length' of an array is read-only in some cases
"use strict";
let arr = [1, 2, 3];
arr.length = -1; //  TypeError: Invalid array length

// Explanation:
// - TypeError happens when the variable exists but the operation is not valid for its type.
// - Common causes: calling non-functions, accessing properties on null/undefined,
//   or reassigning constants.

console.log("This line won't run because a TypeError stops execution.");
