function sample() {
    var name = "vegeta";
    this.name = name;
    console.log(this.name)
    const newName = function (){
        console.log(this.name)
    }
    newName()
}

sample();