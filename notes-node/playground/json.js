// let obj = {
// 	name: 'Carlos'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personStr = '{"name": "Carlos", "age": 28}';
// let objJson = JSON.parse(personStr)
// console.log(typeof objJson);
// console.log(objJson);

const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);