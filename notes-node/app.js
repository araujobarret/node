console.log('starting the app...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
let cmd = argv._[0];

console.log('Yargs', argv);

if(cmd == 'add') {
  notes.addNote(argv.title, argv.body);
}
else
	if(cmd == 'list'){
		notes.getAll();
	}
	else
		if(cmd == 'read'){
			notes.getNote(argv.title);
		}
		else
			if(cmd == 'remove')
				notes.removeNote(argv.title);
			else
				console.log('Command not recognized');