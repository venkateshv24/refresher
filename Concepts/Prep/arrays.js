let array1 = new Array('Hello',"Hi");

let array2 = array1;
let array3 = [...array1];
let array4 = array2;
console.log(array1)

console.log(array1.indexOf('Hi'))

let spliced = array1.splice(1,1)

console.log(array1)
console.log(array2,array3,array4)

let arr3 = [1,2,3,4,5,6];
let arr4 = arr3;
let arr5 = arr4;
console.log(arr3,arr4,arr5)
arr5[3]=[]
console.log(arr3,arr4,arr5)
arr4[2]=9;
console.log(arr3,arr4,arr5)