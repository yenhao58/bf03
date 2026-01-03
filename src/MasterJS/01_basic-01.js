// ES6 - javascript 2015
// let、const
// arrow function
// template string
// default parameter

const myTest = (a=2, b=3) => {
    return a + 2*b;
};
console.log( myTest() );

console.log( mySquare(3));

function mySquare(x) {
  return x * x;
}

// template string
let myName = "Mary";
let age = 20;
let greeting = `Hello, my name is ${myName} and I am ${age+3} years old.`;
console.log(greeting);