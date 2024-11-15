const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// const result = Math.max(3, 1, 4, 1, 5, 10, 2, 6);
const result = Math.max(...nums);
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1]; // arr1とは別物
let newArr1 = arr1; // arr1と一心同体
newArr1.push(4);
console.log(newArr === arr1);
console.log(newArr);
console.log(newArr1 === arr1);
console.log(newArr1);

let newArr2 = [...newArr, 10, ...arr2]; // 配列を連結
console.log(newArr2);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = 'Ahyeon'
console.log('obj: ' + JSON.stringify(obj));
console.log('newObj: ' + JSON.stringify(newObj));

const restA = (n, ...argA) => console.log(n + ' ' + argA); // ...はスプレッド演算子やRESTパラメータと言う
restA(1,2,3);

// const restB = (n, ...argB) => console.log(argB);
// restB(1, 3, 4)
