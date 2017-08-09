console.log('starting the app...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;

let cmd = process.argv[2];
console.log('Process', process.argv);
console.log('Yargs', argv);

if(cmd == 'add')
  console.log('Adding new note');
else
	if(cmd == 'list')
		console.log('Listing all notes');
	else
		if(cmd == 'read')
			console.log('Reading note');
		else
			if(cmd == 'remove')
				console.log('Removing the note');
			else
				console.log('Command not recognized');