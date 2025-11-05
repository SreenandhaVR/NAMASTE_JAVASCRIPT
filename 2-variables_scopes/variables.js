//variables are containers for storing values
//Like labled boxes where we can store stuffs(numbers,strings,arrays,objects etc) and use them later in our code
//In JavaScript, variables are declared using three keywords var, let and const

var x = 20;
console.log(x);

if(true){
  let msg = "Hello World";
  console.log(msg); 
}
console.log(msg); // Error: msg is not defined
//In the above example, msg is declared using let inside the if block, so it is not accessible outside the block
// Here reference error, because we cannot access msg outside the block of code

const pi = 3.14;
console.log(pi);
//In the above example, pi is declared using const, so its value cannot be changed later in the code
//If we try to reassign a value to pi, it will throw an error
//pi = 3.14159; // Error: Assignment to constant variable
// Here it will show a type error, because we cannot reassign variable as it is declared using the const keyword

