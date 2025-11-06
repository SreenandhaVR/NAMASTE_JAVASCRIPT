// var a;
// console.log(a);

// console.log(a);
// var a;
// Here it will show undefined, because variable a is declared using var keyword

// console.log(a);
// var a = 7;
// console.log(x);
// Here it will show undefined, because of hoisting in JavaScript

// var a;
// console.log(a);
// a = 7;
// console.log(a);
// Here it will show undefined first and then 7, because variable a is declared first and then assigned a value

// var a;
// console.log(a);
//  if(a===undefined){
//     console.log("a is undefined");
//  }
//  else{
//   console.log("a is not undefined");
//  }
 // Here it will show undefined and then "a is undefined", because variable a is declared but not assigned any value

//  var a;
// console.log(a);
// a=10;
//  if(a===undefined){
//     console.log("a is undefined");
//  }
//  else{
//   console.log("a is not undefined");
//  }
 // Here it will show undefined and then "a is not undefined", because variable a is declared and then assigned a value

 //Javascript also has a special value called 'not defined' which is different from 'undefined'
 //When we try to access a variable that has not been declared, it results in a 'not defined' error
 //Javascript engine throws a ReferenceError indicating that the variable is not defined
 //Javascript is loosely typed language, so it allows us to use variables without declaring them first
 var a;
 console.log(a); 

 a=100;
 console.log(a);
 a="Hi Sreenandha";
 console.log(a);
 // Here it will show undefined, 100 and "Hi Sreenandha", because variable a is declared first and then assigned different values of different types