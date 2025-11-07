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


