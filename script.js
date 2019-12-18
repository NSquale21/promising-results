slowMath.add(2, 6)
.then(res => {
	console.log(res); 
	return slowMath.multiply(res, 2);
}).then(res => {
	console.log(res);
	return slowMath.divide(res, 4);
}).then(res => {
	console.log(res);
	return slowMath.subtract(res, 3);
}).then(res => {
	console.log(res);
	return slowMath.add(res, 98);
}).then(res => {
	console.log(res);
	return slowMath.remainder(res, 2);
}).then(res => {
	console.log(res);
	return slowMath.multiply(res, 50);
}).then(res => {
	console.log(res);
	return slowMath.remainder(res, 40);
}).then(res => {
	console.log(res);
	return slowMath.add(res, 32);
}).then(res => {
	console.log(`The final result is ${res}.`);
}).catch(err => {
	console.log(err)
});

let mathFunc = async () => {
	try {
		let res1 = await slowMath.add(2, 6);
		console.log(res1);
		let res2 = await slowMath.multiply(res1, 2);
		console.log(res2);
		let res3 = await slowMath.divide(res2, 4);
		console.log(res3);
		let res4 = await slowMath.subtract(res3, 3);
		console.log(res4);
		let res5 = await slowMath.add(res4, 98);
		console.log(res5);
		let res6 = await slowMath.remainder(res5, 2);
		console.log(res6);
		let res7 = await slowMath.multiply(res6, 50);
		console.log(res7);
		let res8 = await slowMath.remainder(res7, 40);
		console.log(res8);
		let res9 = await slowMath.add(res8, 32);
		console.log(`The final result is ${res9}.`)
	} catch (err) {
		console.log(err);
	}
};

mathFunc();
