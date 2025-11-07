//referenceError is thrown when trying to access a variable that has not been declared.
console.log(x); // ReferenceError: x is not defined
function testReferenceError() {
  console.log(y); // ReferenceError: y is not defined
}
testReferenceError();
var z = 20;
console.log(z); // 20
// In the above example, accessing variables x and y before they are declared results in ReferenceErrors
// However, accessing variable z after its declaration works fine
// This demonstrates that ReferenceErrors occur when trying to access variables that are not in the current scope or have not been declared yet

// ---------------------------------------------
// ReferenceError occurs when a variable is not found
// in the current scope or any of its outer scopes.
// ---------------------------------------------

// 🌍 Global Execution Context (GEC)
// During the creation phase, JS sets up memory for
// declared variables and functions.
// 'x' is not declared, so it doesn’t exist in memory.

console.log(x); // ❌ ReferenceError: x is not defined


// Function Execution Context (created when called)
// 'y' is not declared inside this function or globally,
// so JS can't find it in any scope chain → ReferenceError.

function testReferenceError() {
  console.log(y); // ❌ ReferenceError: y is not defined
}

testReferenceError();


// ✅ Variable hoisting example
// 'z' is declared with var → it’s hoisted and initialized with undefined
// Later assigned value 20 → works fine.
var z = 20;
console.log(z); // ✅ 20

// ---------------------------------------------
// Summary:
// x → Not declared anywhere → ReferenceError
// y → Not declared in local/global → ReferenceError
// z → Declared with var → Works fine
// ---------------------------------------------
