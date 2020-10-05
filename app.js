// All valid credit card numbers
const valid1 = "4539 6779 0801 6808";
const valid2 = "5535 7667 6875 1439";
const valid3 = "3716 1201 9985 236";
const valid4 = "6011 1443 4068 2905";
const valid5 = "4539 4049 6786 9666";

// All invalid credit card numbers
const invalid1 = "4532 7787 7109 1795";
const invalid2 = "5795 5933 9213 4643";
const invalid3 = "3757 9608 4459 914";
const invalid4 = "6011 1279 6177 7935";
const invalid5 = "5382 0197 7288 3854";

// Can be either valid or invalid
const notCertain1 = "3448 0196 8305 414";
const notCertain2 = "5466 1008 6162 0239";
const notCertain3 = "6011 3770 2096 2656 203";
const notCertain4 = "4929 8771 6921 7093";
const notCertain5 = "4913 5404 6307 2523";

// An array of all the arrays above

const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, notCertain1, notCertain2, notCertain3, notCertain4, notCertain5]

// Add your functions below:
// Transformed batch array
let newMultiArray = [];

// Invalid cards array
let invalidCards = [];

function transformStrArr(string) {
  for (let index = 0; index < string.length; index++) {
    newMultiArray.push(string[index].replace(/\s/g, "").split("").map(Number));

  }
  return newMultiArray;
}
transformStrArr(batch);

// Validate a single card
function validateCard(array) {
  // If valid card detais, return true;
  // check the length of the credit card
  let sum = 0;
  let number = 0;
  let len = array.length - 1
  for (let index = len; index >= 0; index--) {
    // Check if theIndex is even
    if (index % 2 == 0) {
      number = array[index] * 2;
      // Check is the product is greater than 9
      if (number > 9) {
        number = (number - 9);
        console.log(number)
      }
    } else {
      number = array[index];
    }
    sum = sum + number;
    // console.log(sum)
  }
  if (sum % 10 == 0) {
    return "Valid Card"
  }

}

// Find invalid cards
function findInvalidCards(card) {

  let sumEven = 0;
  let sumOdd = 0;
  let number = 0;
  for (let i = 0; i < card.length; i++) {
    let len = card[i].length;
    // Determine if the length of the array is an even number
    if (len % 2 == 0) {
      // console.log(len)
      for (let index = len - 1; index >= 0; index--) {
        // Check if theIndex is even
        // console.log(card[i][index])
        if (index % 2 === 0) {
          // console.log(index)
          number = card[i][index] * 2;
          // console.log(number)
          // Check is the product is greater than 9
          if (number > 9) {
            number = (number - 9);
            // console.log(number)
          }
        } else {
          number = card[i][index];
        }

        sumEven = sumEven + number;
      }

    } else {
      // length is odd
      for (let index = len - 1; index >= 0; index--) {
        // Check if theIndex is even

        if (index % 2 === 1) {

          number = card[i][index] * 2;
          // console.log(number)
          // Check is the product is greater than 9
          if (number > 9) {
            number = (number - 9);
            // console.log(number)
          }
        } else {
          number = card[i][index];
        }

        sumOdd = sumOdd + number;
      }

    }
    if (sumEven % 10 !== 0 && sumOdd % 10 !== 0) {
      invalidCards.push(card[i])
    }
  }
  console.log(invalidCards)
  return invalidCards;
}

findInvalidCards(newMultiArray);

// Find Invalid Issuers
function isInvalidCardIssuers(nextedArray) {

  let companies = [];
  for (let index = 0; index < nextedArray.length; index++) {

    if ((nextedArray[index][0] === 3) && companies.includes("American Express") === false) {
      companies.push("American Express");
    } else if ((nextedArray[index][0] === 4) && companies.includes("Visa") === false) {
      companies.push("Visa");
    } else if ((nextedArray[index][0] === 5) && companies.includes("Master Card") === false) {

      companies.push("Master Card");

    } else if ((nextedArray[index][0] === 6) && companies.includes("Discover") === false) {

      companies.push("Discover");

    } else {
      console.log("Issuer doesn't exist");
    }

  }
  return companies;
}

console.log(isInvalidCardIssuers(invalidCards))




