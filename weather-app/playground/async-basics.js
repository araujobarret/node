console.log('Starting app...');

function asyncCall() {
	setTimeout(() => console.log('Async call'), 2000);
	setTimeout(() => console.log('Another async call'), 0);	
	console.log('Finishing the function...');
}

asyncCall();
console.log('Finishing app...');
