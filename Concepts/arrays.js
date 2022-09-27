//PRG 1
const arr = [1,2,3]
arr[100] = 5;
console.log(arr.length,arr)

const arr1= ["1","3","5","7"]
const ans = arr1.filter(a => {
    console.log(a)
    return a >= 5
})
console.log(ans)

c

for(let i=0;i<arr2.length;i++){
    if(arr2[i] > arr2[i+1]){
        let t = arr2[i];
        arr2[i] = arr2[i+1];
        arr2[i+1] =t;
    }
}
console.log(arr2)
let num = [1,2,3,4,5,6,7,8]
let arr3 = [1,2,3,4,5,6];
let arr4 = arr3;
let arr5 =arr4
arr5=[]
arr4[2]=9;
console.log(arr3,arr4,arr5)

const names = ['Itachi','sasuke','Naurto','Lee']
//Sum using reduce
let ar1 = [1,2,3,4,5,6,7];

const ar2 = ar1.reduce((sum,val)=> sum + val,5)
console.log(ar2)

const shops = [
    {
        kfc: {
        status:'open'}     
    },
    {
        dominos: {
        status:'open'
    }     
    },
    {
        pizzahut: {
        status:'open'
    }     
    },
    
]
const shopName = Object.keys(shops);
const opened = ()=>{
    return shops.map(shop => Object.keys(shop))
}

console.log(opened());