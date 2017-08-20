const utils = require('./utils');

it('Should add two numbers', () => {
	var result = utils.add(10, 15);
	if(result !== 25)
		throw new Error('Expected 25 but got ' + result);
});

it('Should square a number', () => {
	var result = utils.square(11);
	if(result !== 121)
		throw new Error('Expected 121 but got ' + result);
});