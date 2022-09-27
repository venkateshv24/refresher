// const str = 'hello';
// // for of
// for( const a of str){
//     console.log(a)
// }

// for( const b in str){
//     console.log(b)
// }

// Object.prototype.customObject = () => "Hello";
// Array.prototype.customArray = () => "Hii"

// const arr = [1,2,3];
// console.log(arr.customArray())
// const fn = (ele,i,arr) => console.log(ele + i,"Yes");
// const returnType = arr.forEach((a,b,arr) => console.log(a,b,arr))
// console.log("returntye",returnType)
// arr.forEach(fn)

// arr.forEach(a => {
//     if(a===2){
//         return
//     }
//     console.log("statemnet")
// })

const twoSum = function(nums, target) {
   for(let i=0;i<nums.length;i++) {
       for(let j=i+1;j<nums.length;j++) {
           let sum = nums[i] + nums[j];
            if(sum === target) {
                console.log(i,j)
            }
       }
   }
    
};

let nums = [2,7,3,4,5,11,15,9,0,-2],target = 9
twoSum(nums,target)