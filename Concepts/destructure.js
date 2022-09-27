const user = {
    name:{
        fname:'John',
        lname:'gray'
    },
    intrest:{
        hobby:{
            sports:"Cricket"
        }
    }
}

const { name:{fname:ff} , intrest:{hobby:{sports}}} = user;
console.log(ff,sports)
