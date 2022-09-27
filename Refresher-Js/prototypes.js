function Sample(name,age){
    this.name = name;
    this.age = age;
    this.getDetails = function(){
        return `Name is $(this.name)`
    }
}
Sample.prototype.showName = function(){
    console.log("called",this.name)
}
console.log(Sample.prototype)