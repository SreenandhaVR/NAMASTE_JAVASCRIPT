// ------------------------------------------------------------
// 🔹 Data Types in JavaScript
// ------------------------------------------------------------
// JavaScript has 2 main types of data:
// 1️⃣ Primitive Data Types
// 2️⃣ Reference Data Types
// ------------------------------------------------------------

// 🧩 Primitive Data Types:
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// String → Text enclosed in quotes
let name = "Sreenandha";
console.log(name); // Output: Sreenandha

// Number → Can be integer or decimal
let x = 10;
let y = 10.5;
console.log(x, y); // Output: 10 10.5

// Boolean → Only true or false
let learning = true;
let completed = false;
console.log(learning, completed); // Output: true false

// Null → Represents an empty or non-existing value
let emptyValue = null;
console.log(emptyValue); // Output: null

// Undefined → Variable declared but not assigned a value
let notAssigned;
console.log(notAssigned); // Output: undefined

// BigInt → Used for very large numbers
let bigNumber = BigInt(987654321012345678901234567890);
console.log(bigNumber);

// Symbol → Unique and immutable identifier
let uniqueId = Symbol("id");
console.log(uniqueId);


// ------------------------------------------------------------
// 🧠 Reference Data Types:
// Object, Array, Function
// ------------------------------------------------------------

// Object → Stores key-value pairs
let student = {
  name: "Sreenandha",
  course: "M.Voc Software Application Development",
  active: true
};
console.log(student);

// Array → Stores list of values
let hobbies = ["Coding", "Designing", "Exploring"];
console.log(hobbies);

// Function → Reusable block of code
function greet() {
  return "Hello, welcome back!";
}
console.log(greet()); // Output: Hello, welcome back!


// ------------------------------------------------------------
// 🔍 Type Checking using typeof
// ------------------------------------------------------------
console.log(typeof name);        // string
console.log(typeof x);           // number
console.log(typeof learning);    // boolean
console.log(typeof emptyValue);  // object (null is a special case)
console.log(typeof notAssigned); // undefined
console.log(typeof bigNumber);   // bigint
console.log(typeof uniqueId);    // symbol
console.log(typeof student);     // object
console.log(typeof hobbies);     // object (arrays are special objects)
console.log(typeof greet);       // function


// ------------------------------------------------------------
// 🔄 Type Conversion
// ------------------------------------------------------------

// Explicit Conversion → done by you
let numStr = "123";
let num = Number(numStr); // Convert string to number
console.log(num, typeof num); // 123 'number'

let boolStr = "true";
let bool = Boolean(boolStr); // Convert string to boolean
console.log(bool, typeof bool); // true 'boolean'

// Implicit Conversion → done by JavaScript automatically
let result1 = "5" + 5; // String + Number → String
console.log(result1, typeof result1); // "55" 'string'

let result2 = "10" - 5; // String - Number → Number
console.log(result2, typeof result2); // 5 'number'

// ------------------------------------------------------------
// Summary
// Primitive → Stored directly in memory
// Reference → Stored as a reference (address in memory)
// ------------------------------------------------------------
