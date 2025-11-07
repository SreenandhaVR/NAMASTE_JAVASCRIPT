// Example with var
// Declaration: creating a variable (e.g., let x;)
// Initialization: assigning a value to a declared variable (e.g., x = 10;)
// Re-declaration: declaring the same variable name again in the same scope

var name = "Sreenandha";
console.log(name); // Output: Sreenandha
var name = "Nandha"; // Re-declared
console.log(name); // Output: Nandha
// var is function-scoped, so it doesn't respect block scope
if (true) {
  var age = 22;
}
console.log(age); // Output: 22


// Example with let
let city = "Kunnamkulam";
console.log(city); // Output: Kunnamkulam
city = "Thrissur"; // Updated
console.log(city); // Output: Thrissur
// let is block-scoped, so re-declaration in same scope is not allowed
// let city = "Kochi"; // ❌ Error: Identifier 'city' has already been declared
if (true) {
  let country = "India";
  console.log(country); // Output: India
}
// console.log(country); // ❌ Error: country is not defined


// Example with const
const PI = 3.14;
console.log(PI); // Output: 3.14
// PI = 3.14159; // ❌ Error: Assignment to constant variable
// const PI = 22/7; // ❌ Error: Identifier 'PI' has already been declared
if (true) {
  const gravity = 9.8;
  console.log(gravity); // Output: 9.8
}
// console.log(gravity); // ❌ Error: gravity is not defined

// var   → Function-scoped | Allows re-declaration | Can be updated
// let   → Block-scoped    | No re-declaration     | Can be updated
// const → Block-scoped    | No re-declaration     | Cannot be updated