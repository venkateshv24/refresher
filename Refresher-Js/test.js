// const reverseNum = (num) => {
//     let tempNum = num;
//     while(tempNum > 0) {
//         let quotient = tempNum % 10;
//         let reminder = Math.trunc(tempNum / 10);
//         console.log(quotient)
//         tempNum = reminder
//     }
// }

// reverseNum(123456789)

// let arr = [5,4,2,1,3,0,10]
// const sortArr = (arr) => {
//     let length = arr.length,temp;
//     for(let i=0;i<length;i++){
//         for(let j=i+1;j<length;j++){
//             if(arr[i] < arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp
//             }
//         }
//     }
//     console.log(arr)
// }

// sortArr(arr)

var a = 2;
var b = 3;
function hello(a){
    console.log(a,b)
}
hello()
