// String Operators in JavaScript
// Strings are text values enclosed in quotes ("" or '').
// We can combine (concatenate) and modify strings using operators and methods.

let firstName = "Sreenandha";
let lastName = "V R";

// Concatenation using + operator
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Sreenandha V R

// Template literals (using backticks ``) allow string interpolation
let greeting = `Hello, ${fullName}!`;
console.log(greeting); // Output: Hello, Sreenandha V R!

// String length
let nameLength = fullName.length;
console.log(`Length of full name: ${nameLength}`);

// Common string methods
let upper = fullName.toUpperCase(); // Convert to uppercase
console.log(upper);

let lower = fullName.toLowerCase(); // Convert to lowercase
console.log(lower);

let trimmed = fullName.trim(); // Removes whitespace
console.log(trimmed);

let hasName = fullName.includes("Sreenandha"); // Check if it contains text
console.log(hasName);

let position = fullName.indexOf("V"); // Find index of character
console.log(position);

let sliced = fullName.slice(0, 6); // Extract part of the string
console.log(sliced);

let replaced = fullName.replace("V R", "VR"); // Replace text
console.log(replaced);

// Concatenation using concat() method
let another = firstName.concat(" ", lastName);
console.log(another);

// Comparing strings (lexicographically)
let compare = firstName.localeCompare(lastName);
console.log(compare); // -1 if firstName comes before lastName

// Multiline string using template literals
let multiLine = `This is a string
that spans
multiple lines.`;
console.log(multiLine);

// Escaping characters using backslash
let escaped = "She said, \"Welcome!\"";
console.log(escaped);
