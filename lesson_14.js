// Task 1: Finding the sum of 1 to n;

let sum = 0;
let sumOfNumbers = n => {
    if(n > 0){
        sumOfNumbers(n-1);
    }
    sum += n;
    return sum;
}

// console.log(sumOfNumbers(100));

// Task 2: Finding sum of given number's digits

let sumOfDigits = n => {
    let res = 0;
    if(n > 0){
    res = n % 10 + sumOfDigits(Math.floor(n / 10));
    }
   return res;
}

// console.log(sumOfDigits(489));

// Task 3: Finding Fibonachi number

let findFibonachi = n => {
    if(n == 1) return 1
    if(n == 0) return 0
    return findFibonachi(n - 1) + findFibonachi(n - 2); 
}

// console.log(findFibonachi(0));
// console.log(findFibonachi(1));
// console.log(findFibonachi(2));
// console.log(findFibonachi(3));
// console.log(findFibonachi(4));
// console.log(findFibonachi(5));
// console.log(findFibonachi(6));
// console.log(findFibonachi(7));
// console.log(findFibonachi(8));
// console.log(findFibonachi(9));
// console.log(findFibonachi(10));
// console.log(findFibonachi(11));

// Task 4: Finding assumed number

let findNumber = () => {
	let num = Math.floor(10 * Math.random()) + 1;
	let a = +prompt("1dan 10gacha son kiriting");
	if (num == a) {
		alert("Topdingiz");
	} else {
		findNumber();
	}
};

// findNumber();

console.log([1, 2, 4, 6].length);

if("jasur" == ["j", "a", "s", "u", "r"]) {
    console.log(true);
} else {
    console.log(false);
}