function countUnique(inputArray) {
    let length = inputArray.length, uniqueArray = [], left = 0 , right = 1;
    if(inputArray.length === 0) {
        return 0
    }
    while(right <= length-1) {
        if((inputArray[left] === inputArray[right])) {
           right++
        } else {
            left++
            let temp = inputArray[right];
            inputArray[right] = inputArray[left]
            inputArray[left] = temp
            right++
        }
    }
    return left + 1
}

console.log(countUnique([1,1,1,1,2,3,4,4,4,7,8,8,8,9]))


// const averagePair = (arr,avg) => {
//     let length = arr.length ,left =0, right = length-1;
//     while(left < right) {
//        if((arr[left] + arr[right]) > (avg*2) ){
//         right--
//        }
//         if((arr[left] + arr[right]) < (avg*2)){
//             left++
//         }
//         if((arr[left] + arr[right]) === (avg*2)){
//           console.log("Pair",arr[left],arr[right])
//           left++
//         }
//     }
// }

// averagePair([-3,1,3,3,5,6,7,9,10,12,15,19],8)