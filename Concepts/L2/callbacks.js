const errorCase = (method) => {
    console.log(method, "is failed");
}

const hitMethod = (callback) => {
    let error = true;
    let method = "POST";
    if(error) {
        callback(method)
    }
}

hitMethod(errorCase);