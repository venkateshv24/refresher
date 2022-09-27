function sample() {
    console.log(a)
    var a;
}

function sample1() {
    console.log(a)
    a=10;
    var a;
    console.log(a)
}

sample();
sample1()