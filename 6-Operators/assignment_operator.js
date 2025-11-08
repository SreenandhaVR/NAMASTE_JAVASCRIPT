// Assignment Operators in JavaScript

let x = 8;
let y = 4;
let z = 2;

// Basic Assignments
x = y;        // Assign value of y to x
y += z;       // Add z to y and assign result
z *= 3;       // Multiply z by 3 and assign result

console.log("x:", x);  // 4
console.log("y:", y);  // 6
console.log("z:", z);  // 6

// Chained Assignment
let p, q, r;
p = q = r = 7; // Assigns 7 to all variables
console.log("p:", p);
console.log("q:", q);
console.log("r:", r);

// Array Destructuring
let colors = ["Red", "Green", "Blue"];
let [primary, secondary, tertiary] = colors;
console.log("Primary:", primary);
console.log("Secondary:", secondary);
console.log("Tertiary:", tertiary);

// Object Destructuring
let car = { brand: "Tesla", model: "Model 3" };
let { brand, model } = car;
console.log("Brand:", brand);
console.log("Model:", model);

// Assignment with Function
function multiply(num1, num2) {
    return num1 * num2;
}
let result = multiply(3, 5); // Assigns the returned value to 'result'
console.log("Multiplication Result:", result);

// Ternary (Conditional) Assignment
let marks = 75;
let grade = marks >= 50 ? "Pass" : "Fail";
console.log("Grade:", grade);

// Logical Assignment Example
let hasAccount = true;
let hasPermission = false;
let loginStatus = hasAccount || hasPermission ? "Allowed" : "Blocked";
console.log("Login Status:", loginStatus);
