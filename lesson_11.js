// Task 1: calculating the sum of inputted numbers unless this number is negative

let sumOfNumbers = () => {
	let sum = 0;
	let num;
	do {
		num = +prompt("Give me number", 1);
        if(num <= 0) break;
		sum += num;
	} while (true);
	console.log(sum);
};

// sumOfNumbers();

// Task 2: calculating the sum of inputted numbers (number > 50) unless this number is negative

let sumOfNumbersUnder50 = () => {
	let sum = 0;
	let num;
	do {
		num = +prompt("Give me number", 1);
		if (num > 50) continue;
		if (num <= 0) break;
		sum += num;
	} while (true);
	console.log(sum);
};

// sumOfNumbersUnder50();

// Task 3: Identifying whether the given number is prime number or not.

let isPrimeNumber = a => {
    for(let i = 2; i < a; i++){
        if(a % i == 0){
            return true;
        } else {
            return false
        }
    }
    return true;
}

// console.log(isPrimeNumber(15));

// Task 4: showing multiplication table

let showMultTable = () => {
    for(let i = 2; i < 10; i++){
        console.log(`${i} karra jadvali:`);
        for(let j = 1; j <= 10; j++){
            console.log(`${i} * ${j} = ${j * i}`);
        }
    }
}

// showMultTable();

// Task 5: forming necessary shape according to given number

let formStars = a => {
    for(let i = 1; i <= a; i++){
        let star = "";
        for (let j = 1; j <= i; j++) {
           star += "*";
        }
        console.log(star);
    }
}
// formStars(7);




