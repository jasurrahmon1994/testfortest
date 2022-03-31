let findTheSum = k => {
	let arr = [];
	let res = [];
	let result = [];
	for(let i = 0; i < k; i++) {
		arr.push(Math.floor(k * Math.random()) + 1)
	}
	console.log(arr);
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] + arr[j] == k) {
				res = [arr[i], arr[j]]
			}
			if(res?.length >= 1) {
				result.push(res);
			}
			res = [];
		}
	}
	console.log(result);
}

findTheSum(10)