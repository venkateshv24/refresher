function factorial(n){
    if(n==1){
        return 1
    }
    return n * factorial(n-1)
}

function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}


console.log((factorial(3)))
countDown(5);