// const obj ={
//     name:'vegeta',
//     character: function(){
//         console.log(this)
//     }
// }

// const sample = function(){
//     console.log(this);
// }
// //sample();

// const Sample1 = function(name){
//     this.name = name
//     this.sample3 = function(){
//         return name
//     }
// }

// const sample4 = () => {
//     let name = "hello"
//     console.log(this)
// }
// const obj1 = new Sample1('vegeta')
// console.log(obj1.name,obj1.sample3())
// sample4()


// //nrml vs arrow
// const obj6 ={
//     name:'vegeta',
//     character: function(){
//         console.log("nrml",this)
//     }
// }

const f1 = function(){
    console.log(this)
}

const f2 = () => {
    this.name = "Sparrow"
    console.log("arrow",this)
}

f1()
f2()