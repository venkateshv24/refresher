const newObj = Object({'name': "called",'b':{'c':'deep'}})
const newObj1 = Object.assign({},newObj)
const spreadObj = {...newObj}
newObj.name = "hello"
newObj.b.c = "hello123"
newObj1.name = "shallows"
console.log(newObj,newObj1,spreadObj)

let ob1 ={ 'A' : 1}
let ob2 ={ 'A' : 1}
console.log(Object.is('A','A'))