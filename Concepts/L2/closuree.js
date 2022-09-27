const f1 = () => {
    const dataOne = 'vegeta';
    const f2 =()=>{
        console.log("Name is ",dataOne);
        const dataTwo = dataOne;
        return dataTwo
    }
    return dataTwo
}

f1();