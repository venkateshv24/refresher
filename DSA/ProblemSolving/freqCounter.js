// // Anagram

// // Function takes to input strings

// // Both should have same frequency of characters and same size

// function validateAnagram(strOne, strTwo) {

//     let frequencyOne = {}
//     let frequencyTwo = {}
//     // Loop through each strings individualy to find frequency of characters - two loops

//     for(let str of strOne) {
//         frequencyOne[str] = (frequencyOne[str] || 0) + 1
//     }
//     for(let str of strTwo) {
//         frequencyTwo[str] = (frequencyTwo[str] || 0) + 1
//     }
//     console.log(frequencyOne)
//     console.log(frequencyTwo)
//     // Third Loop - 1.compare the existing of character in both frequency object and 2.compare the occurance

//     for (let key in frequencyOne) {
//         if(!frequencyTwo[key]) {
//             return false;
//         }
//         if(!(frequencyOne[key] === frequencyTwo[key])) {
//             return false
//         }
//     }
//     return true
// }

// console.log(validateAnagram('doctorr','tordoca'))

// ('hello','hoell') -> true
// ('task','tusk') -> false
// ('good','god') -> false
// ('two','two') -> true

// const samerequency = (num1,num2) => {
//     let str1 = num1.toString(), str2 = num2.toString(), freqOne = {}, freqTwo = {};
//     if(str1.length !== str2.length) {
//         return false
//     }
//     for(let val of str1){
//         freqOne[val] = freqOne[val] + 1 || 1;
//     }
//     for(let val of str2) {
//         freqTwo[val] = freqTwo[val] + 1 || 1;
//     }
//     for(let key in freqOne){
//         if(!freqTwo[key]){
//             return false
//         }
//         if(!(freqOne[key] === freqTwo[key])){
//             return false
//         }
//     }
//     return true
// }

// console.log(samerequency(12144,41124))

const isEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length) {
      return false;
    }
  
    const compared = firstArray.map((el, id) => secondArray[id] === el);
  
    return !compared.includes(false);
  };

  console.log(isEqual(1234,1235))