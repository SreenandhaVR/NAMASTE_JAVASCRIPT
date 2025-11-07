// hoisting.js
// ------------------------------------------------------------
// 🌟 What is Hoisting?
// Before your code runs, JavaScript remembers all your variable
// and function names. This is called "Hoisting".
// It means you can sometimes use them before writing them!
// ------------------------------------------------------------


// Example 1: Using 'var' before declaring
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// 👉 Explanation:
// JavaScript sets aside memory for 'a' and gives it a temporary
// value of 'undefined' before running the code.


// Example 2: Using a function before declaring
sayHello(); // ✅ Works fine!
function sayHello() {
  console.log("Hello, Sreenandha!");
}

// 👉 Explanation:
// Function declarations are fully remembered (hoisted),
// so they can be used before being written.


// Example 3: Using 'let' and 'const' before declaring
try {
  console.log(b); // ❌ Error
} catch (err) {
  console.log("Error with 'let':", err.message);
}

let b = 20;
console.log(b); // ✅ Output: 20


try {
  console.log(c); // ❌ Error
} catch (err) {
  console.log("Error with 'const':", err.message);
}

const c = 30;
console.log(c); // ✅ Output: 30

// 👉 Explanation:
// 'let' and 'const' are also hoisted, but they are not ready to use
// until the code reaches their line. Accessing them earlier causes an error!


// ------------------------------------------------------------
// 🧠 Quick Summary
// var   → Hoisted and gets value 'undefined'
// let   → Hoisted but not ready yet (error if used early)
// const → Same as 'let' but must be given a value immediately
// function → Fully hoisted (can be used before written)
// ------------------------------------------------------------
