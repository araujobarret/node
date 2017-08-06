console.log('Starting notes.js');

module.exports.age = 28;

module.exports.addNote = () => {
	console.log('Note added.');
	return 'New Note';
};

module.exports.add = (a, b) => {
	return a + b;
};