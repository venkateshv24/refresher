// function to written a character count in string
//Input -> String
// output -> Object with character counts

function countChar(str) {
    //Initialise object
    let charObject = {};
    //loop through string
    for(let char of str) {
        //char = str;
        // if(charObject[char] > 0) {
        //     charObject[char]++
        // } else {
        //     charObject[char] =1;
        // }
        charObject[char] = ++charObject[char] || 1
    }
     //Conditions
     //If character present in the object , increment count to
     // If character not present , add character then add count as 1
    return console.log(charObject)
}

countChar('abcdaaaaA22')