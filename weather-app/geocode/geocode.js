const request = require('request');

var geocodeAddress = (url, callback) => {
	request({
		url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(url),
		json: true
	}, (error, response, body) => {	
		if(error){
			callback('No response from the server');			
		}
		else{
			if(body.status === 'ZERO_RESULTS'){
				callback('Unable to find the location provided');
			}
			else
				if(body.status === 'OK'){
					callback(undefined, {
						address: body.results[0].formatted_address,
						latitude: body.results[0].geometry.location.lat,
						longitude: body.results[0].geometry.location.lng
					});					
				}		
		}
		
	});
};

module.exports = {
	geocodeAddress
}