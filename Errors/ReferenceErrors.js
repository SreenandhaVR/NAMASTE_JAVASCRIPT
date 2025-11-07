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