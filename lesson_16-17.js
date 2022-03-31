let sumOfNegatives = (arr) => {
	let sum = 0;
	arr.forEach((el) => {
		if (el < 0) {
			sum += el;
		}
	});
	console.log(sum);
};

// sumOfNegatives([2, 4, -5, -6, -9, 12])

let sumOfPositives = (arr) => {
	let sum = 0;
	arr.forEach((el) => {
		if (el > 0) {
			sum += el;
		}
	});
	console.log(sum);
};

// sumOfPositives([2, 4, -5, -6, -9, 12])

let createAndFind = (n) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		let random = Math.floor(-25 + Math.random() * 50);
		arr.push(random);
	}
	console.log(arr);
	console.log(Math.max(...arr));
};

// createAndFind(20);
// createAndFind(20);
// createAndFind(20);
// createAndFind(20);

let findLetter = (n) => {
	let arr = [];
	for (let i = 0; i < n; i++) {
		let random = Math.floor(Math.random() * 100);
		arr.push(random);
	}
	console.log(String.fromCharCode(...arr));
};

// findLetter(100);

let findTheLongest = (arr) => {
	let arrLen = [];
	arr.forEach((el) => {
		arrLen.push(el.length);
	});
	let max = Math.max(...arrLen);
	console.log(
		arr.find((item) => item.length == max),
		max,
	);
};

// findTheLongest(["jasur", "kecha", "uyga", "bormadi", "a;sldk;alsdkjf;"]);

let examResults = () => {
	let arr = [];
	for (let i = 0; i < 10; i++) {
		let random = Math.floor(100 * Math.random()) + 1;
		arr.push(random);
	}
	console.log(
		arr,
		arr.filter((sub) => sub >= 55),
	);
};

// examResults()

// Multi-dimensional array: find the sum of elements in each row

let assistant = (n, m) => {
	let multiArray = [];
	for (let i = 0; i < m; i++) {
		let innerEl = [];
		for (let j = 0; j < n; j++) {
			let random = Math.floor(Math.random() * n * m);
			innerEl.push(random);
			random = 0;
		}
		multiArray.push(innerEl);
	}
	return multiArray;
};

let findTheSum = (n, m) => {
	let multiArray = assistant(n, m);
	let sum = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			sum += multiArray[i][j];
		}
		multiArray[i].push(sum);
	}
	console.table(multiArray);
};

// findTheSum(4, 5);

let findTheBiggest = (n, m) => {
	let multiArray = assistant(n, m);
	console.table(multiArray);
	let max = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			max = max >= multiArray[i][j] ? max : multiArray[i][j];
		}
	}
	console.log(max);
};

// findTheBiggest(18, 20)

let findTheDioganal = (n, m) => {
	let multiArray = assistant(n, m);
	console.table(multiArray);
	let sum = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i == j) {
				sum += multiArray[i][j];
			}
		}
	}
	console.log(sum);
};

// findTheDioganal(5,5);

let findThePlus = (n, m) => {
	let multiArray = assistant(n, m);
	console.table(multiArray);
	let sum = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (j == Math.floor(n / 2)) {
				sum += multiArray[i][j];
			}
			if (i == Math.floor(n / 2)) {
				sum += multiArray[i][j];
			}
			if (i == Math.floor(n / 2) && j == Math.floor(n / 2)) {
				sum = sum - multiArray[i][j];
			}
		}
	}
	console.log(sum);
};

findThePlus(5,5)
