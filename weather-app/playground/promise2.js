let geoCodeAddress = (address) => {
		return new Promise((resolve, reject) => {
		const request = require('request');

		request({
			url: 'http://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
			json: true
		}, (error, response, body) => {				
				if(error){
					reject('No response from the server');			
				}
				else{
					if(body.status === 'ZERO_RESULTS'){
						reject('Unable to find the location provided');
					}
					else
						if(body.status === 'OK'){
							resolve({
								address: body.results[0].formatted_address,
								latitude: body.results[0].geometry.location.lat,
								longitude: body.results[0].geometry.location.lng
							});					
						}		
				}			
		});
	});
};

geoCodeAddress('Rua Uruguai 380 Tijuca Rio de Janeiro').
	then((location) => {
		console.log(JSON.stringify(location, undefined, 2));
	}, (err) => {
		console.log(err);
	});