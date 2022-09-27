// // Input array and window value , should return a sum of window value and find its max

// // 1) Check for array empty or less window value 
// // 2) delete start value of prev window and add last value of existing window

const slidingWindow = (arr,num) => {
    if( arr.length < num){
        return null
    }
    let temp=0;
    for(let i=0;i<num;i++){
        temp += arr[i]
    }
    let max = temp
    for(let j=num;j<arr.length;j++){
        max = max-arr[j-num]+arr[j]
        temp = Math.max(temp,max)
    }
    return temp
}

console.log(slidingWindow([1,2,3,4,5,6,6,7,8],3))

