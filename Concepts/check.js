const declarationAmount = '12345678911';
const length = declarationAmount.length;
console.log(length)
if(Number(declarationAmount) > 0 && length <= 10) {
    return console.log("Called")
}

console.log("Called1")