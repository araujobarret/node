
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
let cmd = argv._[0];

console.log('Yargs', argv);


if(cmd == 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(note){
  	console.log('Note created.');
  	notes.logNote(note);
  }
  else
  	console.log('Error creating the note.');
}
else
	if(cmd == 'list'){
		console.log('Note List');
  		console.log('------');
		notes.getAll();
	}
	else
		if(cmd == 'read'){
			let note = notes.getNote(argv.title);
			if(note){
				console.log('Note');
				notes.logNote(note);
			}
			else
				console.log('Note not found');
		}
		else
			if(cmd == 'remove'){
				if(notes.removeNote(argv.title))
					console.log('Note removed');
				else
					console.log('No note removed');
			}
			else
				console.log('Command not recognized');