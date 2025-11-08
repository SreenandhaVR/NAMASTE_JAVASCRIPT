// Logical Operators in JavaScript
// These are used to combine or reverse conditions
// Operators: AND (&&), OR (||), NOT (!)

let a = 4;
let b = 6;

// AND (&&) → true only if both conditions are true
console.log(a > 0 && b > 0); // true  (both positive)
console.log(a > 0 && b < 2); // false (second condition false)
console.log(a < 0 && b > 2); // false (first condition false)
console.log(a < 0 && b < 8); // false (first condition false)

// OR (||) → true if at least one condition is true
console.log(a > 0 || b > 0); // true  (both true)
console.log(a > 0 || b < 2); // true  (first true)
console.log(a < 0 || b > 2); // true  (second true)
console.log(a < 0 || b < 8); // true  (second true)

// NOT (!) → reverses the boolean value
let yes = true;
let no = false;

console.log(!yes); // false
console.log(!no);  // true
