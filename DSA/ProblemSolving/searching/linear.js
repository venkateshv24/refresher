// Array Inbuilt methods like find,includes,indexOf uses linear search

const linearSearch = (arr,target) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target) return i
    }
    return -1;
}

console.log(linearSearch([1,2,3,5,8],1))