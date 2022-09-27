//select sort

const selSort = (a) => {
    let length = a.length,temp;
    for(let i =0;i<length;i++){
        for( let j=i+1;j<length;j++){
            if(a[i] < a[j]){
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    console.log(a)
}

// selSort([1,4,2,3,7])

const bubbleSort = (a) => {
    let n = a.length, temp;
    for(let i =0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp
            }
        }
        console.log(a)
    }
}

bubbleSort([1,4,5,2,3,7])

//mergesort

//Initial loop iteration length n 
// compare first two , logic - swap smaller
