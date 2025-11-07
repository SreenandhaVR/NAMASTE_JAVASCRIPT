// SyntaxError occurs when JavaScript code is invalid before execution.

// Example 1: Redeclaring variables with 'var'
var a = 10;
var a = 100; // No SyntaxError — 'var' allows redeclaration
console.log(a); // Output: 100

// Example 2: Redeclaring with 'let' in the same scope
// let b = 10;
// let b = 100; // SyntaxError: Identifier 'b' has already been declared

// Example 3: Mixing 'let' and 'var'
// let c = 10;
// var c = 100; // SyntaxError: Identifier 'c' has already been declared

// Example 4: Using 'const' without initialization
// const d; // SyntaxError: Missing initializer in const declaration
// d = 1000;

// Explanation:
// - 'var' is function-scoped and allows redeclaration.
// - 'let' and 'const' are block-scoped and do NOT allow redeclaration.
// - 'const' must be initialized at the time of declaration.
// - Redeclaring 'var' is valid but can cause logical bugs in large programs.

console.log("Program executed successfully since 'var' allows redeclaration.");
