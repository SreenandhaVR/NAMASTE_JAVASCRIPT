//Scope the area where function and variables is accessible or "visible"
//There are 3 types of scopes in JavaScript
//1. Global Scope
//2. Local Scope
//3. Block Scope
//Global Scope: variables declared outside of any function or block have global scope
//Local Scope: variables declared inside a function have local scope
//Block Scope: variables declared inside a block (between { }) using let or const have block scope
//Variables declared with var inside a block do not have block scope, they have function scope  
//Example of Global Scope
var globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); // Accessible here
} 
showGlobalVar();
console.log(globalVar);

//Example of Local Scope
function showLocalVar() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
showLocalVar(); 
//console.log(localVar); // Error: localVar is not defined
//Example of Block Scope
if (true) { 
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}   
//console.log(blockVar); // Error: blockVar is not defined
//Using var inside a block
if (true) {     
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}     
console.log(functionVar); // Accessible here because var does not have block scope
//Understanding scopes is important for managing variable visibility and avoiding naming conflicts in your code
