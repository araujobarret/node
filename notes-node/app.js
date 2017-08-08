console.log('starting the app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq(['Carlos']);
console.log(filteredArray);
//console.log(_.isString(true));
//console.log(_.isString('Carlos'));

//console.log(`Sum: ${notes.add(5, 2)}`);

/*var user = os.userInfo();

fs.appendFile('greetings.txt', `Hi there ${user.username}! You are ${notes.age}.`, (err) => {
	if(err)
		console.log(err);
});*/

