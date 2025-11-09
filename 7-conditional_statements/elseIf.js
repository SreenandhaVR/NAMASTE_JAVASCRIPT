// Conditional Statements in JavaScript
// These are used to make decisions based on conditions (true or false).

let age = 20;

// if statement
if (age < 13) {
  console.log("You are a child.");
}
// else if statement
else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
}
// else statement
else {
  console.log("You are an adult.");
}

// Nested if example
let marks = 85;

if (marks >= 90) {
  console.log("Grade: A+");
} else if (marks >= 75) {
  console.log("Grade: A");
  if (marks >= 80) {
    console.log("Excellent performance!");
  }
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Using if with logical operators
let hasID = true;
let hasTicket = false;

if (hasID && hasTicket) {
  console.log("You can enter the event.");
} else if (hasID && !hasTicket) {
  console.log("You need a ticket to enter.");
} else {
  console.log("You cannot enter.");
}

// Switch statement example
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Wednesday":
    console.log("Midweek vibes!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("It's a regular day!");
}

// Ternary operator example (short form of if-else)
let isStudent = true;
let discount = isStudent ? "You get a student discount!" : "No discount available.";
console.log(discount);
