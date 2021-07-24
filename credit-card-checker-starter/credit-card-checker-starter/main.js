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
// validates credit card 
const validateCred = (arr) => {
    let test = 0
    let start = arr.length - 2
    for(i = start; i >= 0; i -= 2){
        if(arr[i] * 2 > 9){
            test += (arr[i] * 2) - 9
            
        } else {
        test += arr[i] * 2
        
        }
    }
    for(o = arr.length - 1; o >= 0; o -= 2){
        test += arr[o]
    }

    
    if(test % 10 === 0){
        return 'Valid'
    } else if( test % 10 > 0){
        return 'Invalid'
    } else {
        return 'input Card Number'
    }
};
// finds valid credit cards from an array or nested array of card numbers
const findValidCreditCards = (arrB) => {
    let validadtedArr = []
    arrB.forEach(element => {
        if(validateCred(element) === 'Invalid'){
            validadtedArr.push(element)
        }
        
    })
    
    return validadtedArr
};
//matches invalid card numbers to the companies that provided the cards
const idInvalidCardCompanies = (par) => {
    let arr = findValidCreditCards(par)
    let newArr = []
    let filteredArray = []
    for(i = 0; i < arr.length; i++){
        if(arr[i][0] === 3){
            if(newArr.indexOf('Amex') == -1){
                newArr.push('Amex')
            }
        }
        if(arr[i][0] === 4){
            if(newArr.indexOf('Visa') == -1){
            newArr.push('Visa')
            }
        }
        if(arr[i][0] === 5){
            if(newArr.indexOf('Mastercard') == -1){
            newArr.push('Mastercard')
            }
        }
        if(arr[i][0] === 6){
            if(newArr.indexOf('Discover') == -1){
            newArr.push('Discover')
            }
        }
    }
    console.log(newArr)// logs all card companies that have provided invalid card numbers
    return newArr;
    
}

// console.log(validateCred(valid1))
// findValidCreditCards(batch)

//test commands for the code above 
idInvalidCardCompanies([invalid1]); // prints ['Visa']
idInvalidCardCompanies([invalid2]); // prints ['Master Card']
idInvalidCardCompanies(batch);// prints all comapnies that have issues invalid cards 
