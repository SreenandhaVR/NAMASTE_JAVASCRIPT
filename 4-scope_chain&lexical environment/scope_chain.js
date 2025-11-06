function a(){
  var b=10;
  c();
  function c(){
    console.log(b);
  }
}
a();
// In the above example, function c is able to access variable b which is defined in its outer function a
//Lexical environment refers to the structure that holds variable bindings and function declarations
// It determines how variable names are resolved in nested functions
// When a function is defined, it captures the lexical environment in which it was created
// This allows the function to access variables from its outer scope even when it is executed in a different context
// The scope chain is the mechanism that JavaScript uses to resolve variable names
// When a variable is accessed, JavaScript looks for it in the current scope first
// If it is not found, it moves up the scope chain to the outer scope, and continues this process until it reaches the global scope
// If the variable is still not found, it results in a ReferenceError indicating that the variable is not defined
// This behavior allows for nested functions to access variables from their outer scopes, enabling powerful patterns like closures  
// Closures are functions that "close over" their lexical environment, allowing them to retain access to variables from their outer scope even after that scope has finished executing
