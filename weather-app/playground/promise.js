var p = new Promise((resolve, reject) => {
	setTimeout(() => {
		//resolve('Hey. It worked');
		reject('Somethind wen wrong');
	}, 2000);	
});

p.then((message) => {
	console.log('Success: ', message);
}, (err) => {
	console.log('Error: ', err);
});