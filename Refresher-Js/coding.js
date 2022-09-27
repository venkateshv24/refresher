const currentDate = new Date().getFullYear();
const myDOB = 1994;

const ageCalculator = dob => console.log(`Age is ${currentDate - dob}`)

ageCalculator(myDOB)

const markDetails = {
    weight : 78,
    height : 1.69
}

const johnDetails = {
    weight : 92,
    height : 1.95
}

const bmiCalculator = (weight,height) => {
    let bmi = weight / height **2;
    return console.log(`BMI is ${bmi}`);
}

let markHigherBMI = bmiCalculator(markDetails.weight,markDetails.height) > bmiCalculator(johnDetails.weight,johnDetails.height) ? true : false;

console.log(markHigherBMI)
