{
  //compound statement
  var a = 10;
  console.log(a);
}
//Block scope is created using {} for grouping statements together

if(true) // shows syntax error if no block is provided unexpected end of input

//It expects a statement here

if (true) true;
//output : true
//Correct way

//group of multiple statements can be used in a place where single statement is expected using block by Js

if(true){
  var b = 20;
  console.log(b);
}
//This is a block wrapping up multiple statements so that we can use it in places where single statement is expected
//Output : 20

//Block scope means what all variables and functions we can access inside a block
{
 var a =10;
 let b = 20;
 const c = 30;
}

//shadowing
var c = 100;
function x(){
  var c = 30;
  console.log(window.c); //100
  window.c = 20;
}
x();
console.log(c); //20
//In the above example the variable c inside function x is shadowing the global variable c
//We can access the global variable using window object
//After modifying window.c the global variable c is changed to 20
//Block scope with let and const
{
  let x = 10; 
  const y = 20;
  console.log(x);
  console.log(y);
}
//console.log(x); //error x is not defined
//console.log(y); //error y is not defined
//In the above example x and y are block scoped variables and cannot be accessed outside the block
//Block scope with var
{
  var p = 10;
  console.log(p);
}
console.log(p); //10
//In the above example p is declared using var and is function scoped, so it can be accessed outside the block
//However, it is not a good practice to use var inside blocks as it can lead to confusion
//It is recommended to use let and const for block scoped variables
//Nested blocks
{
  let a = 10;
  {
    let b = 20;
    console.log(a);
    console.log(b);
  }
  //console.log(b); //error b is not defined
}
//In the above example b is block scoped to the inner block and cannot be accessed in the outer block
//However, a can be accessed in the inner block as it is declared in the outer block
//Summary:
//Blocks are used to group multiple statements together
//Block scope determines the accessibility of variables and functions within a block
//let and const are block scoped, while var is function scoped
//Shadowing occurs when a variable in a inner scope has the same name as a variable in an outer scope
//illegal shadowing occurs when a variable declared with let or const in a block scope has the same name as a variable declared with var in the same scope
let a = 10;
{
  let a = 20; // legal shadowing
  console.log(a); // 20

}

//illegal shadowing example
var b = 30;
{
  // let b = 40; // SyntaxError: Identifier 'b' has already been declared
  console.log(b);
}
//In the above example, trying to declare b with let inside the block causes an error because b is already declared with var in the outer scope
