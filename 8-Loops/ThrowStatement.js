//Throw Statement is used to generate custom errors in JavaScript.
// It allows you to create your own error messages and handle them using try...catch blocks.
function divide(a, b) {
  if (b === 0) {
    throw "Cannot divide by zero!";
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.log("Error:", error);
}
//In this example, an error message will be printed because division by zero is not allowed.

console.log("Program continues after error handling.");