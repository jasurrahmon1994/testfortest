"use strict";

// First task: calculating sum of numbers from 1 to 1000;

let sumOfThousand = () => {
    let sum = 0;
    for(let i = 1; i <= 1000; i++){
        sum += i;
    }
    console.log(sum);
}

// sumOfThousand();

// Second task: logging numbers from 1 to 10;

let logTillTen = () => {
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

// logTillTen();

// Third task: logging multiplication table of given number

let multiplyTable = (a) => {
    for(let i = 1; i <= 10; i++){
        console.log(a * i);
    }
}

// multiplyTable(5);

// Fourth task: logging even numbers from 1 to 20

let logEvenNumbers = () => {
    for(let i = 1; i <= 20; i++){
        if(!(i%2)) {
            console.log(i);
        }
    }
}
// logEvenNumbers();

// Fifth task: calculating the sum of interval numbers between a and b

let sumOfIntervals = (a, b) => {
    let sum = 0;
    for(let c = a +1; c < b; c++) {
        sum += c;
    }
    console.log(sum);
}
// sumOfIntervals(1,5);

// Sixth task: finding natural dividers of given number;

let findDividers = a => {
    for(let i = 1; i <= a; i++){
        if(!(a%i)){
            console.log(i);
        }
    }
}
// findDividers(100);

// Seventh task: finding complex numbers
let isComplexNumber = (a) => {
    let sum = 0;
	for (let i = 1; i < a; i++) {
		if (!(a % i)) {
			sum += i;
		}
	}
    return (a == sum) ? true : false;
};
// console.log(isComplexNumber(6));
// Eighth task: calculating sum of digits from given number;
let sumOfDigits = a => {
    let sum = 0;
    a = "" + a;
    for(let i = 0; i < a.length; i++){
        sum = sum + +a[i];
    }
    console.log(sum);
}
sumOfDigits(11);
// Ninth task: finding the greatest number among inputted ones
let arr = [];
let findBiggest = () => {
	let num = +prompt("Give me number", 1);
	if (num != 0) {
		arr.push(num);
		findBiggest();
	} else {
		console.log(Math.max(...arr));
	}};
findBiggest();