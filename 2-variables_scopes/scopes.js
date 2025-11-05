// Scope: The area where functions and variables are accessible or "visible"
// There are 3 types of scopes in JavaScript:
// 1. Global Scope
// 2. Local (Function) Scope
// 3. Block Scope

// Global Scope: Variables declared outside of any function or block have global scope.
var globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // ✅ Accessible here
} 
showGlobalVar();
console.log(globalVar); // ✅ Accessible here too

// Local (Function) Scope: Variables declared inside a function have local scope.
function showLocalVar() {
    var localVar = "I am a local variable";
    console.log(localVar); //  Accessible here
}
showLocalVar();
// console.log(localVar); //  Error: localVar is not defined

// Block Scope: Variables declared inside a block (between { }) using let or const have block scope.
if (true) { 
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); //  Error: blockVar is not defined

// Using var inside a block:
// Variables declared with var inside a block do NOT have block scope; they have function (or global) scope.
if (true) {     
    var functionVar = "I am a function variable";
    console.log(functionVar); //  Accessible here
}     
console.log(functionVar); // Accessible here because var does not have block scope

// Understanding scopes is important for managing variable visibility 
// and avoiding naming conflicts in your code.

var x = "Welcome to JavaScript"

function example() {
    console.log(x);
}
example();

console.log(x);

// Function Scope
function sayHello() {
    let a = "Hello";
    console.log(a);
}
sayHello();

// Block Scope
function hey() {
    if (true) {
        let y = 6;
        console.log(y);
    }
}
hey();