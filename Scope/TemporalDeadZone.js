// 🔹 Temporal Dead Zone (TDZ)
// TDZ is the period between a variable being hoisted and initialized.
// During this time, accessing the variable causes a ReferenceError.
// Applies to variables declared with 'let' and 'const'.
console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization

let name = "Sreenandha";

console.log(name); // ✅ Output: Sreenandha
