const request = require('request');

request({
	url: 'http://maps.googleapis.com/maps/api/geocode/json?address=Rua%20uruguai%20tijuca',
	json: true
}, (error, response, body) => {
	console.log(body);
});