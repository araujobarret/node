console.log('starting the app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(`Result: ${res}`);

console.log(`Sum: ${notes.add(5, 2)}`);

/*var user = os.userInfo();

fs.appendFile('greetings.txt', `Hi there ${user.username}! You are ${notes.age}.`, (err) => {
	if(err)
		console.log(err);
});*/

