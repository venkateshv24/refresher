// Binary search is fast but works on sorted data only

const binarySearch = (arr,num) => {
    let left = 0, right = arr.length-1;
    let middle = Math.trunc(right/2)
    while(left <= right){
        if(num < arr[middle]) right = middle - 1;
        else left = middle+1;
        middle = Math.trunc((left+right)/2)
    }
    return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7))