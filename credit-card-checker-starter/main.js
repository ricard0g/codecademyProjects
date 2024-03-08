// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(arr){
    //create an exact copy of our passed array because we don't want to mutate our original array
    let ourArr = arr.slice();

    //for loop to iterate over the array. Only doubling those that are in even positions, and that are not at the end of our array (ths las number being the Check Digit)
    for(let i = 0; i < ourArr.length; i++){
        if((i % 2) === 0 && i !== (ourArr.length - 1)){
            ourArr[i] *= 2;
            //after the multiplication we check if the result is greater than nine. If so, we substract 9 from the result
            if(ourArr[i] > 9){
                ourArr[i] -= 9;
            }
        } else if((i % 2) !== 0 && i !== (ourArr.length - 1)){
            continue;//if the number is in an odd position we want the iterator to directly pass it
        }
    };
    //created a variable that represents the reduced array giving us the sum of all the numbers in the array
    let ourArrRed = ourArr.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    })

    return (ourArrRed % 10) === 0;//using our previously created variable, we directly pass as the returned value a boolean. Evaluating 'true' or 'false' depending on the validity of the credit card number
};


const findInvalidCards = (nestArr)=>{
    //I reversed the returned value of the function 'validateCard()' because I use that returned value later in a .filter() method
    const reverseValidateCred = (arr)=>{
        if(validateCred(arr)){
            return false;
        } else {
            return true;
        }
    }

    let invalidNumbers = nestArr.filter(reverseValidateCred);//using filter I save a new filtered array into the variable invalidNumbers 

    return invalidNumbers
}

console.log(findInvalidCards(batch));

//I save, in a more explicit way, the result from invalidNumbers for later use in the idInvalidCardCompanies()
//I know that I am using 'batch' as a direct argument, which is not very usable for different batches. But I used it directly to not have to create another batch of credit card numbers
let invalidNumsArr = findInvalidCards(batch);
console.log(invalidNumsArr);

const idInvalidCardCompanies = (invalidNumsArr) => {
    const companiesArr = ['Amex (American Express)', 'Visa', 'Mastercard', 'Discover'];//save all the companies names in an array to avoid creating multiple variables that are all related
    let invalidCompaniesArr = [];//the array where the companie's names are going to be added
    
    //for loop to iterate over the invalidNumsArr. Because I saved it in a specific variable instead of calling the function, it's easier to access its values
    for(let i = 0; i < invalidNumsArr.length; i++){

        //control flow where I first evaluate the first number of each credit card number (invalidNumsArr[i][0]) with the unique first digit for each company
        //and also evaluating to see if inside the invalidCompaniesArr array is there any signal of the company name that the unique first digit refers to
        if(invalidNumsArr[i][0] === 3 && invalidCompaniesArr.indexOf(companiesArr[0]) < 0){
            invalidCompaniesArr.push(companiesArr[0]);
        } else if(invalidNumsArr[i][0] === 4 && invalidCompaniesArr.indexOf(companiesArr[1]) < 0){
            invalidCompaniesArr.push(companiesArr[1]);
        } else if(invalidNumsArr[i][0] === 5 && invalidCompaniesArr.indexOf(companiesArr[2]) < 0){
            invalidCompaniesArr.push(companiesArr[2]);
        } else if(invalidNumsArr[i][0] === 6 && invalidCompaniesArr.indexOf(companiesArr[3]) < 0){
            invalidCompaniesArr.push(companiesArr[3]);
        } else {
            console.log(`Company not found`);
        }
    }
    console.log(invalidCompaniesArr)
    return invalidCompaniesArr;
}

idInvalidCardCompanies(invalidNumsArr);