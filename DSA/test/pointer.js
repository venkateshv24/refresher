// // // [2,3,4,5,10,15] target =  10

// // // [2,5]  1
// // // [3,5]  2
// // // [4,5]  3

// // // const pointerFn = (arr,num) => {
// // //     let left = 0, right = arr.length-1,count=0;
// // //     while (right > left) {
// // //         if((arr[left] + arr[right]) < num) {
// // //             let ind = right-left
// // //             console.log(ind)
// // //             count = count + ind ;
// // //             left++
// // //         } else {
// // //             right--
// // //         }
// // //     }
// // //     return count;
// // // }

// // // pointerFn([1, 2, 3, 4, 5, 6, 7, 8],7)

// // const productData = (arr,num) => {
// //     let left = 0; right = arr.length - 1; count=0;
// //     while (left < right) {
// //         if((arr[left] * arr[right] < num)){
// //             count = count + (right-left)
// //             left++
// //         } else {
// //             right--
// //         }
// //     }
// //     console.log(count)
// // }   
// // productData([2, 3, 4, 6, 9],20)

// // const sumData = (arr,num) => {
// //     let left = 0; right = arr.length - 1;
// //     while (left < right) {
// //         if((arr[left] + arr[right]) === num){
// //             console.log(arr[left],arr[right])
// //             left++
// //         } else {
// //             right--
// //         }
// //     }
// // }   
// // sumData([0,1, 2, 3, 4, 5, 6, 9],6)

// // const maxFreq = (arr) => {
// //     let l = arr.length, freq = {},major;
// //     let n = l/2;
// //     for(let val of arr) {
// //         freq[val] =  (freq[val] || 0 ) + 1;
// //     }
// //     console.log(freq)
// //     for(let ind in freq) {
// //         if(freq[ind] > n) {
// //             major = n
// //         }
// //     }
// //     console.log(major)
// //     return major
// // }

// // maxFreq([3, 3, 4, 2, 4, 4, 2, 4, 4, 3, 3, 3, 3])

// class Node {
//     constructor(value){
//         this.value = value;
//         this.freq = 1;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root =  null;
//     }
//     add(value) {
//         let newNode = new Node(value);
//         if(!this.root) {
//             this.root = newNode
//         } else {
//             let current = this.root;
//             if(value === current.value) {
//                 current.freq++;
//             }
//         }
//     }
// }

// const findOdd = (arr) => {
//     let freq = {} ,oddValue;
//     for(let val of arr) {
//         //let v = val.toString();
//         freq[val] = freq[val]+1 || 1;
//     }

//     for(let ind in freq) {
//         if((freq[ind]%2) !== 0) {
//             oddValue = ind
//         }
//     }
//     return oddValue
// }

// console.log(findOdd([1,2,2,1,3,4,3,4,4]))

// const maxSub = (arr) => {
//     const l = arr.length;
//     let maxEle = 0 , maxValue = 0;
//     for(let i=0;i<l;i++) {
//         maxEle = maxEle + arr[i];
//         if(maxEle < 0) {
//             maxEle =0;
//         }
//         console.log(maxEle)
//         if(maxEle > maxValue){
//             maxValue = maxEle
//         }
//     }
//     return maxValue
// }

// console.log(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// const singleSum = () => {
//     return function helper(number) {
//         let sum=0,rem = number;
//         while(rem > 0){
//             let quotient = rem % 10;
//             // console.log(quotient);
//             sum = sum + quotient;
//             rem = Math.trunc(rem/10);
//         }
//         if(sum > 9) {
//             console.log("called")
//             return sum = helper(sum)
//         }
//         return sum
//     }
// }

function helper(number) {
    let sum=0,rem = number;
    while(rem > 0){
        let quotient = rem % 10;
        // console.log(quotient);
        sum = sum + quotient;
        rem = Math.trunc(rem/10);
    }
    if(sum > 9) {
        return sum = helper(sum)
    }
    return sum
}

console.log(helper(1234561))

const sum = (num) => {
    if(num === 0) {
        return 0;
    }
    return (num % 9 === 0) ? 9 : (num % 9);
}

console.log(sum(272))