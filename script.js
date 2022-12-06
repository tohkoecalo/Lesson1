"use strict";

const capitalise = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

console.log('capitalise for "abc" returns ' + capitalise('abc'));

const isEven = (input) => {
    return input % 2 === 0;
}

console.log('isEven for 2 returns ' + isEven(2));
console.log('isEven for 3 returns ' + isEven(3));

const getDigitsSum = (input) => {
    let result = 0;

    while (input > 0) {
        result += input % 10;
        input = Math.floor(input / 10); // wtf
    }

    return result;
}

console.log('getDigitsSum for 15 returns ' + getDigitsSum(15));
console.log('getDigitsSum for 9000 returns ' + getDigitsSum(9000));