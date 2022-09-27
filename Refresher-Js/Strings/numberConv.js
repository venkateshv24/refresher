// // const romanToInteger = (str) => {
// //     let rToI = { 'I':1,'V':5,'X':10,'L':50, 'C': 100, 'D':500,'M':1000}
// //     let length = str.length, total=0;
// //     for(let i=0;i<length;i++) {
// //         if(rToI[str[i]] < rToI[str[i+1]]) {
// //             total = -rToI[str[i]]+total
// //         }  else {
// //             total= total+rToI[str[i]]
// //         }
// //     }
// //     console.log(total)
// // }

// // // 1895
// // // MDCCCLXLV
// // romanToInteger('MDCCCLXLV')

// // 1200
// // MCC

// const intToRoman = (num) => {
//     let rom = '';
//    if(num >= 1000){
//         return rom = 'M'+intToRoman(num - 1000);
//    }
//    else if(num >= 900){
//     return rom = 'CM'+ intToRoman(num - 900);
//    }
//    else if(num >= 500){
//     return rom = 'D'+ intToRoman(num - 500);
//    }
//    else if(num >= 400){
//     return rom = 'CD'+ intToRoman(num - 400);
//    }
//    else if(num >= 100){
//     return rom = 'C'+ intToRoman(num - 100);
//    }
//    else if(num >= 90){
//     return rom = 'XC'+ intToRoman(num - 90);
//    }
//    else if(num >= 50){
//     return rom = 'L'+ intToRoman(num - 50);
//    }
//    else if(num >= 40){
//     return rom = 'XL'+ intToRoman(num - 40);
//    }
//    else if(num >= 10){
//     return rom = 'X'+ intToRoman(num - 10);
//    }
//    else if(num >= 9){
//     return rom = 'IX'+ intToRoman(num - 9);
//    }
//    else if(num >= 5){
//     return rom = 'V'+ intToRoman(num - 5);
//    }
//    else if(num >= 4){
//     return rom = 'IV'+ intToRoman(num - 4);
//    }
//    else if(num >= 1){
//     return rom = 'I'+ intToRoman(num - 1);
//    } else {
//        return ''
//    }
    
// }

// console.log(intToRoman(950))
// let rToI = { 'I':1,'V':5,'X':10,'L':50, 'C': 100, 'D':500,'M':1000}
const iToR = (num) =>{
    let result = ''
    let obj = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1
    }
    while (num !== 0) {
        for(let key in obj) {
            if(num >= obj[key]){
                result=result+key
                num = num - obj[key]
                break
            }
        }
        
   }
   console.log(result)
}

iToR(12000)