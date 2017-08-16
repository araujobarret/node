const yargs = require('yargs');

const axios = require('axios');

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

let geocodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.address);

axios.get(geocodeUrl).then((response) => {
	if(response.data.status === 'ZERO_RESULTS')
		throw new Error('Could not find the address');
	else {			
		let latitude = response.data.results[0].geometry.location.lat;
		let longitude = response.data.results[0].geometry.location.lng;
		let weatherUrl = 'https://api.forecast.io/forecast/ff16edc03ca403a096295e18807565a1/' + longitude + ',' + latitude;
		console.log(response.data.results[0].formatted_address);		
		return axios.get(weatherUrl);
	}
}).then((response) => {
	let temperature = response.data.currently.temperature;
	let apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
	if(e.code === 'ENOTFOUND')
		console.log('Could not connect to the API server');
	else
		console.log(e.message);
});