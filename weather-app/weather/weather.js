const request = require('request');

let getWeather = (longitude, latitude, callback) => {
	
	request({
		url: 'https://api.forecast.io/forecast/ff16edc03ca403a096295e18807565a1/' + longitude + ',' + latitude,
		json: true
	}, (error, response, body) => {
		if(error)
			callback('No response from the forecast.io server');
		else		
			switch(response.statusCode){
				case 403:
					callback('Unauthorized access');					
					break
				case 400: 
					callback('Unable to fetch weather');					
					break;
				case 200:
					if(!error) 
						callback(undefined, {
							temperature: body.currently.temperature,
							apparentTemperature: body.currently.apparentTemperature
						});					
					else
						callback('Unable to fetch weather');
					break;

			}
			
	});
};

module.exports = {
	getWeather
}
