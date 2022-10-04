const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3]
let largestNumber = arrayOfNums[0];

function findLargestNumber() {
    for (let i=0; i < arrayOfNums.length; i++) {
        if(arrayOfNums[i] > largestNumber) {
            largestNumber = arrayOfNums[i];
          
        }
    }
    return largestNumber;
}

function findEvenNumbers() {
    let evenArrary = [];
    for (let i=0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] % 2 === 0) {
            evenArrary.push(arrayOfNums[i])
        }
    }
    return evenArrary;
}

function findOddNumbers() {
    let oddArrary = [];
    for (let i=0; i < arrayOfNums.length; i++) {
        if (arrayOfNums[i] % 2 === 1) {
            oddArrary.push(arrayOfNums[i])
        }
    }
    return oddArrary;
}
console.log(findOddNumbers());