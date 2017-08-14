// const request = require('request');
// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js')

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('Help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.a, (errorMessage, results) => {
// 	if(errorMessage)
// 		console.log(errorMessage);
// 	else{
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}

// });

//ff16edc03ca403a096295e18807565a1

const request = require('request');

request({
	url: 'https://api.forecast.io/forecast/ff16edc03ca403a096295e18807565a1/-22.932,-43.231',
	json: true
}, (error, response, body) => {
	if(error)
		console.log('No response from the forecast.io server');
	else		
		switch(response.statusCode){
			case 403:
				console.log('Unauthorized access');
				break
			case 400: 
				console.log('Unable to fetch weather');
				break;
			case 200:
				console.log(body.currently.temperature);
				break;

		}
		
});