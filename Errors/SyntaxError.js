// syntaxError.js
// ---------------------------------------------------------
// SyntaxError occurs when the JavaScript engine finds
// invalid code structure *before* execution starts.
// ---------------------------------------------------------

// Example 1: Redeclaring a variable with let in the same scope
let a = 10;
let a = 100; //  SyntaxError: Identifier 'a' has already been declared

// Example 2: Invalid const declaration
// const x; // SyntaxError: Missing initializer in const declaration

// Example 3: Unclosed string
// let msg = "Hello; //  SyntaxError: Unterminated string literal

// ---------------------------------------------------------
// Explanation:
// - let and const cannot be redeclared in the same scope.
// - SyntaxErrors happen during the parsing (compile) phase,
//   before the code executes or any scope is created.
// ---------------------------------------------------------

console.log("This will only run if no syntax error exists!");
