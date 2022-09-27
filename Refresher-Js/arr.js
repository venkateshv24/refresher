

// // // // const findPair = (arr,num) => {
// // // //     let left =0; right = arr.length -1 ;
// // // //     while(left < right){
// // // //         if((arr[left]+arr[right]) === num) {
// // // //              console.log(arr[left],arr[right])
// // // //              left++;
// // // //              //right++;
// // // //         } else if((arr[left]+arr[right]) < num) {
// // // //             left++;
// // // //         } 
// // // //         else {
// // // //             right--;
// // // //         }
// // // //     }
// // // //     return
// // // // }

// // // // findPair([-3,0,1,2,3,4,5,6],3)

// // // // const objPair = (arr) => {
// // // //     let obj = {};
// // // //     arr.map(ele => {
// // // //         obj[ele[0]] = ele[1];
// // // //     })
// // // //     return obj;
// // // // }

// // // // console.log(objPair([['a',1],['b',2]]))

// // // let array = [1,2,3,4,5,1,1]

// // // // let without = (arr,a,b) => arr.filter((ele) => {
// // // //     console.log(a,b)
// // // //     return (ele != 1 && ele != 2)
// // // // })

// // // // console.log(without(array,1,2))

// // // // const unique2 = (array) => {
// // // //      let filtered = array.filter((element, id) => {
// // // //          console.log(id,array.indexOf(element))
// // // //          return array.indexOf(element) === id
// // // //         })
// // // //      return filtered
// // // // }

// // // // console.log(unique2(array))

// // // const sameArray = (arr1,arr2) => {
// // //     if(arr1.length !== arr2.length){
// // //         return false
// // //     }
// // //     let freq1 = {}, freq2 = {};
// // //     for(let val of arr1) {
// // //         freq1[val] = freq1[val]+1 || 1;
// // //     }
// // //     for(let val of arr2) {
// // //         freq2[val] = freq2[val]+1 || 1;
// // //     }
// // //     for(let ind in freq1){
// // //         if(!freq2[ind] || !(freq1[ind] === freq2[ind])){
// // //             return false
// // //         }
// // //     }
// // //     return true
// // // }

// // // console.log(sameArray([1,2,3,4,5],[2,1,3,4,5]))

// // const arrayRotate = (arr,freq) => {
// //      while (freq > 0) {
// //          let current = arr.shift();
// //          console.log(current)
// //          arr.push(current);
// //          freq--;
// //      }
// //      return arr
// // }

// // console.log(arrayRotate([1,2,3,4,5],3))

// for (var i = 0; i < 3; i++) {
//     let data = i;
//     setTimeout(function log() {
//       console.log(data); // What is logged?
//     }, 1000);
//   }

// function createIncrement() {
//   let count = 0;
//   function increment() { 
//     count++;
//   }
//   let message = `Count is ${count}`;
//   function log() {
//     console.log(message);
//   }
  
//   return [increment, log];
// }
// const [increment, log] = createIncrement();
// increment(); 
// increment(); 
// increment(); 
// log();

// function multiply(num1,num2){
//     if(num1 && num2){
//         return num1 * num2;
//     }
//     if(num1) {
//         return function(num2) {
//             return num1 * num2
//         }
//     }
// }

// console.log(multiply(2,3))
// const fn = multiply(3);
// console.log(fn(5))

const findMax = (arr) => {
    let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([2,4,5,60,1,51]))

const findDupe = (arr) => {
    arr.map((ele,ind) => {
        console.log(arr.indexOf(ele),ind)

        if(arr.indexOf(ele) !== ind){
            console.log("Duplicate",ele)
            return true
        }
    })
}

findDupe([1,2,3,4])