
const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const argv = yargs.argv;
let cmd = argv._[0];

console.log('Yargs', argv);

if(cmd == 'add') {
  var res = notes.addNote(argv.title, argv.body);
  if(res){
  	console.log('Node created.');
  	console.log('------');
  	console.log(`Title: ${res.title}`);
  	console.log(`Body: ${res.body}`);
  }
  else
  	console.log('Error creating the note.');
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
			if(cmd == 'remove'){
				if(notes.removeNote(argv.title))
					console.log('Note removed');
				else
					console.log('No note removed');
			}
			else
				console.log('Command not recognized');