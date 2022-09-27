let str = 'a4b4c2d1';
let m = str.match(/\d+/g)
let s = str.match(/[A-z]/g)

let result ='';
for(let i=0;i<m.length;i++){
    let freq = parseInt(m[i])
    for(let j=0;j<freq;j++) {
        result = result+s[i]
    }
}

console.log(result)