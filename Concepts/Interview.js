function sample() {
console.log(a);
var a;
}

function sample1() {
    console.log(a);
    //var a;
}
sample()
//sample1()

const a1 = [1,2,3,4,5];
const a2 = a1.filter(val => val > 3)
console.log(a2)