//  Hoisting and Memory
// When JavaScript runs, it first sets up memory for variables.
// This happens in two steps:
// 1️⃣ Creation Phase → Memory is set up
// 2️⃣ Execution Phase → Code runs line by line
// ------------------------------------------------------------


// Example 1: Using 'var'
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// 🧠 In memory:
// Creation Phase → a = undefined
// Execution Phase → a = 10


// Example 2: Using 'let' and 'const'
try {
  console.log(b); // ❌ Error (not ready yet)
} catch (err) {
  console.log("Error with 'let':", err.message);
}

let b = 20;
console.log(b); // ✅ Output: 20


try {
  console.log(c); // ❌ Error (not ready yet)
} catch (err) {
  console.log("Error with 'const':", err.message);
}

const c = 30;
console.log(c); // ✅ Output: 30

// 🧠 In memory:
// Creation Phase → b and c exist but not ready yet (in TDZ)
// Execution Phase → b = 20, c = 30
// Summary
// var   → Gets a placeholder value 'undefined'
// let   → Exists but not ready (TDZ - Temporal Dead Zone)
// const → Same as 'let', but must have a value right away
//function → Fully hoisted (can be used before declaration)
