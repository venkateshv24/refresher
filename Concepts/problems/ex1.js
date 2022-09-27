const isArray = (data) => {
if(Array.isArray(data)){
    return console.log("Array");
}
return console.log("Not an Array")
}

isArray(1);

const cloneArray = (array) => {
return [...array]
}

const cloneArray1 = (array) => {
    return array.slice(1,3);
    }

let arr = [1,3,5,6]
let newArr = cloneArray(arr);
let newArr1 = cloneArray1(arr);
newArr.push(3);
console.log(newArr,newArr1,arr)


let lastOfArray = (array,n) => {
if(n === 'null'){
    return array[array.length]
}
if(n > array.length){
    return array
}
return array.slice(array.length-n)
}

console.log(lastOfArray([1,2,3,4],6))


console.log(['hi','how'].join(','))

let num = 124213426;
let str = num.toString()
let str1 = '';
for(let i=0;i<str.length;i++) {
    if(str[i]%2 == 0) {
        str1 += str[i]
        if(str[i+1]%2 == 0) {
            str1 += '-';
        }
    } else {
        str1 += str[i]
    }
}

console.log(str1)