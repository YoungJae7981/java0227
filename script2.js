// const a = [1, 2, 3, 4, 5];
// const b = [a, 7, 8, 9]; //[[1,2,3,4,5],6,7,8,9]
// const c = [...a, 6, 7, 8, 9]; // [1,2,3,4,5,6,7,8,9]
// myPrint(b);
// console.log(b);
// console.log(c);
// const d = [...a]; // [1,2,3,4,5]
// d[0] = 100;
// myPrint(d);
// myPrint(a);

// // s
// const output123 = [...이름];
// myPrint(output123);
// console.log(output123);
// const output12 = [...문자열];
// myPrint(output12);
// console.log(output12);

const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [a, b, c] = arr;
// console.log(a, b, c);

const [a, b, c] = arr;
const [x, , z] = arr;
console.log(x, z);

const [a1, b1, c1 = 10123, d1 = 4, e1 = 100] = arr;
console.log(a1, b1, c1, d1, e1);

const [x1, ...y1] = arr; //rest
console.log(x1, y1);

const obj = {
  name: "youngjae",
  age: 28,
};

const { name, age } = obj;
console.log(name);
