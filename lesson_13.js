
// Task 1: Finding arithmetic mean for given three numbers

let findArithmetic = (a, b, c) => {
    console.log((a + b + c) / 3);
}

// findArithmetic(3, 6, 9);

//  Task 2: Finding maximum number among given numbers

let findMax = (a, b, c) => {
    console.log(Math.max(a, b, c));
}

// findMax(13, 35, 890);

// Task 3: Find negative numbers and calculate their sums

let sumOfNegatives = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
            sum += arr[i]
        }
    }
    console.log(sum);
}

// sumOfNegatives([1, 5, 7, -8, -11, 4, -6])


// Task 4: Find the sum of digits in given number

let sumOfDigits = a => {
    let sum = 0;
    do{
        let rem = a % 10;
        a = Math.floor(a / 10);
        sum += rem;
    } while( a > 0 )
    console.log(sum);
}

// sumOfDigits(666666);

// Task 5: Greet with the user

let greeting = name => {
    console.log(`Hello ${name}`);
}

// greeting("Jasur");











// Task 6: Find the greatest common divisor

let findGcd = (a, b) => {
    let assistant = x => {
        let res;
        for (let i = x; i >= 1; i--) {
            if (a % i == 0 && b % i == 0) {
                res = i;
                break;
            } else {
                continue;
            }
        }
        return res;
    }
    if(a <= b) {
        return assistant(a)
    } else {
       return assistant(b)
    }
}

console.log(findGcd(144, 10));

// Task 7: Find the least common multiple

let findLcm = (a, b) => {
    return a * b  / findGcd(a, b)
}
console.log(findLcm(12, 14));