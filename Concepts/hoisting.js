const obj = {
    name:'Vegeta',
    race:'saiyan'
}

const { name:chname, race } = obj;

const arr = ['a','b','c','d','f'];
const newArr = [...arr]
arr[0] = 'z';
const arrObj =[
    {
        name:'venkat',
        age:26
    },
    {
        name:'vegeta',
        age:27
    }
]

const mparr = arr.map(val => val+'a')
const filtered = newArr.filter(el => el !== 'a')
const objarrmp = arrObj.map(el => el.name)
console.log(newArr)
console.log(mparr)
console.log(...arr)
console.log(filtered)
console.log(objarrmp)