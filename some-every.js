function hasOddNumber(arr) {
    for (let num of arr) {
        if (num === 3) {
            return true;
        }
    }
    return false;
    console.log(hasOddNumber([1,2,2,2,2,2,4]));
}



function hasAZero(num) {
    for (let num of arr) {
        if (num === 0) {
            return true;
        }
    }
    return false
    console.log(hasAZero(3332123213101232321));
    console.log(hasAZero(1212121));
}



function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !==0);
    console.log(hasOnlyOddNumbers([1,3,5,7]))
}

function hasNoDuplicates(arr) {
    return arr.every((num, index) => arr.indexOf(num) === index);
    console.log(hasNoDuplicates([1,2,3,1]));
}



function hasCertainKey(arr, key) {
    return arr.every(obj => obj.hasOwnProperty(key));
}

const exampleArray= [
    {name: 'Joe', age: 35},
    {name: 'Trav', age: 22},
    {name: 'Ken', age: 34},
];

function hasCertainValue(arr, key, searchValue) {
    return arr.every(obj => obj[key] === value);
}

var arr = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 25 }
];