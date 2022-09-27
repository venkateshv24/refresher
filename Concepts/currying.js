function sample(a) {
    return function(b) {
        return function(c){
            return a+b+c
        }
    }
}

console.log(sample(2)(3)(5))