function Sample(name) {
    this.name = name;
    this.printFn = () => console.log("HI",name);
}

let f1 = new Sample('Vegeta');
console.log(f1)

let objInstance1 = new Object({
    name: 'Goku',
    age: 26,
    greet: () => console.log('HI',name)
})

console.log(objInstance1)

let objInstance2 = Object.create(objInstance1)

console.log(objInstance2)