const anagram = (str1,str2) => {
    let freq1 = {}, freq2 = {};
    if(str1.length !== str2.length) return false;
    for(let val of str1) {
        freq1[val] = freq1[val]+1 || 1;
    }
    for(let val of str2) {
        freq2[val] = freq2[val]+1 || 1;
        if(!freq1[ind]) {
            return false
        } 
    }
    console.log(freq1,freq2)
    for(let ind in freq1){
        if(!freq2[ind]) {
            return false
        }
        if(freq1[ind] !== freq2[ind]){
            return false
        }

    }
    return true
}

console.log(anagram('ass','aas'))