// spread/rest operator: ...
const numAry1 = [15, 4, 9, 16, 25];
const numAry2 = [3, 7, 13, 22, 39];

const myAry12 = [...numAry1, ...numAry2];
console.log( myAry12 );

const obj1 = {
    name: "John",
    age: 30,
    "first name":"Johnathan",
};
const obj2 = {
    city: "New York",
    country: "USA",
};

console.log(obj1.name);
console.log(obj1["name"]);
// console.log( obj1.first name);
console.log( obj1["first name"]);

const Obj12 = {...obj1, ...obj2};
console.log( Obj12);

let obj3 = obj2; // obj3 is a reference to obj2
console.log(obj3);

obj2.country = "Canada";
console.log(obj2);
console.log(obj3); 

let obj4 = {...obj2}; // obj4 is a shallow copy of obj2 
obj2.country = "Taiwan";
console.log(obj2);
console.log(obj4);

// destructuring assignment
const [a, b, ...restAry] = myAry12;
console.log(a);
console.log(b);
console.log(restAry);

const {name, age, ...restObj} = obj1;
console.log(name);
console.log(age);
console.log(restObj);

// for in loop
for (const x in obj1) {
    console.log(`${x}:# ${obj1[x]}`);
}

for(const x in myAry12) {
    console.log(`index ${x}:# value ${myAry12[x]}`);
}

// map , associative array
//  0  1 2  3 4  5 6  7 8  9
// [15,4,9,16,25,3,7,13,22,39]
const fn = ( (value, index) => {
    console.log(`index ${index}:# value ${value}`);
});
myAry12.forEach(fn);