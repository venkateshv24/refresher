//async function
const f1 = async () => {
    const response = {
        status:false,
        sampleFunction: ()=>{
            const sampledata = {
                name:'Itachi',
                clan:'Uchiha'
            }
            return sampledata;
        }
    }
    return response;
}

// console.log(f1());
// f1().then(dt=> console.log(dt));
// f1().then(console.log);

//chained promises

f1()
    .then(res=>{
        if(!res.status) {
            throw new Error('None can replace itachi');
        }
        return res.sampleFunction();
    })
    .then(data=>{
        console.log(data.name,data.clan,"is a legend")
    })
    .catch(err => console.log(err.message))

const aboutItachi = async ()=>{
    try{
        const response = await f1();
        if(!response.status) {
            throw new Error('None can replace itachi');
        }
        const data = response.sampleFunction()
        console.log(data.name,data.clan,"is a legend")
    }
    catch(err) {
        console.log(err.message)
    }
    
}

aboutItachi();