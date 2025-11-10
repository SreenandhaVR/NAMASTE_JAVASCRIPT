//Try...Catch...Finally is used to handle exceptions in JavaScript.
// It allows you to run code that may throw an error and handle that error gracefully.
// The finally block is optional and will always execute after try and catch, regardless of the outcome.
// Example:

try {
  let num = 10 / 0;
  console.log(num);
} catch (error) {
  console.log("Something went wrong!");
} finally {
  console.log("This always runs.");
}
// Note: In this example, dividing by zero does not throw an error in JavaScript,
// so "Something went wrong!" will not be printed. However, the finally block will always execute.