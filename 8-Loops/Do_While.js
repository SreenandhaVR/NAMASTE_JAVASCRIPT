// continue statement example
// Skips the current iteration when the condition is true

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // Skip number 5
  }
  console.log(i);
}

console.log("Loop completed.");
// Note: In this example, the number 5 will be skipped in the output.