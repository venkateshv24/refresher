function sample() {
    return new Promise(function(resolve,reject) {
        setTimeout(()=> resolve("Hello"),2000)
    })
}

async function asyncc() {
    const data = await sample();
    console.log(data)
    sample().then((msg)=>console.log(msg))
    return data
}

const data1 = asyncc()
data1.then(msg => console.log('Final',msg))