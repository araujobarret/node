const yargs = require('yargs');

const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('Help', 'h')
	.argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
	if(errorMessage)
		console.log(errorMessage);
	else{		
		console.log(JSON.stringify(results, undefined, 2));
		weather.getWeather(results.latitude, results.longitude, (error, response) => {
			if(!error)
				console.log(JSON.stringify(response, undefined, 2));
			else
				console.log(error);
		});
	}

});