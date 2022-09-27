//Keys
// 1- Base point where fn execution should end
// Input to the fn exeution on different step

// const factorial = (n) =>{
//     let total = 1;
//     for(let i = n;i > 1;i--){
//         total = total*i
//     }
//     return total;
// }

// console.log(factorial(4))

// const recFactorial = (n) => {
//     if(n === 1) {
//         return 1
//     }
//     return n * factorial(n-1)
// }

// console.log(recFactorial(4))

function power(b,e){
    if(e === 0){
        return 1
    }
    return b * power(b,e-1)
}

console.log(power(2,8))