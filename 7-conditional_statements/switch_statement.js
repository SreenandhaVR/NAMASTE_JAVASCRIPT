// switch statement example
// Used when you want to compare one value to multiple cases

let day = "Friday";

switch (day) {
  case "Monday":
    console.log("Start your week strong!");
    break;
  case "Wednesday":
    console.log("Midweek hustle!");
    break;
  case "Friday":
    console.log("Weekend vibes!");
    break;
  default:
    console.log("Just another regular day!");
}

console.log("Day checked successfully.");
// Note: In this example, "Weekend vibes!" will be printed since day is "Friday".