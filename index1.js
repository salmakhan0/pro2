let demoArray = ["Anisul Islam", 3.92, null, true, undefined, { name: "anis" }];
console.log(demoArray);

console.log(demoArray.length);

console.log(demoArray[2]);

console.log(demoArray.indexOf(3.92));

demoArray.unshift("England");
console.log(demoArray);
demoArray.push("Finland");
console.log(demoArray);

demoArray.shift("England");

console.log(demoArray);

demoArray.pop("Finland");

console.log(demoArray);

demoArray.splice(1, 2);
console.log(demoArray);

demoArray.splice(0, 1, 2);
console.log(demoArray);

let array1 = [4, 5, 6];
let array2 = [1, 2, 3, ...array1];
console.log(array2);

let matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[0][1]);