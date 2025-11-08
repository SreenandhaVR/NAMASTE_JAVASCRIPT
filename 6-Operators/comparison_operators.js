// Comparison Operators in JavaScript
// These operators compare two values and return true or false

let a = 20;
let b = 40;

console.log(a > b);   // Greater than → false
console.log(a < b);   // Less than → true
console.log(a >= b);  // Greater than or equal → false
console.log(a <= b);  // Less than or equal → true
console.log(a == b);  // Equal (loose) → false
console.log(a === b); // Equal (strict) → false
console.log(a != b);  // Not equal (loose) → true
console.log(a !== b); // Not equal (strict) → true

// Logical combinations with comparison
console.log(a > b && a < b); // AND → false (both must be true)
console.log(a > b || a < b); // OR → true (only one needs to be true)
console.log(!(a > b));       // NOT → true (reverses the result)
