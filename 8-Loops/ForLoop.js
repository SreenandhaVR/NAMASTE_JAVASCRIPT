// Counting from 1 to 10
for (let count = 1; count <= 10; count++) {
  console.log(count);
}

// Printing even numbers between 2 and 20
for (let num = 2; num <= 20; num += 2) {
  console.log(num);
}

// Iterating through an array of fruits
const fruits = ["Mango", "Apple", "Orange"];
for (let index = 0; index < fruits.length; index++) {
  console.log(fruits[index]);
}

// Nested Loop Example
for (let outer = 1; outer <= 3; outer++) {
  console.log(`Outer Loop: ${outer}`);
  
  for (let inner = 1; inner <= 2; inner++) {
    console.log(`--> Inner Loop: ${inner}`);
  }
}
