let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {		
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number')
				resolve(a + b);
			else
				reject("Both values must be a number");
		});
	});
}

asyncAdd(10, 15)
	.then((result) => {
		console.log('Result: ', result);	
		return asyncAdd(result, '-25');
	}, (err) => {
		console.log('Error: ', err);
	}).then((result) => console.log('Should be 0: ', result),
		(err) => console.log('Error: ', err));

// var p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		//resolve('Hey. It worked');
// 		reject('Somethind wen wrong');
// 	}, 2000);	
// });

// p.then((message) => {
// 	console.log('Success: ', message);
// }, (err) => {
// 	console.log('Error: ', err);
// });

