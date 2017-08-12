var getUser = (id, callback) => {
	var user = {
		id,
		name: 'Carlos'
	};
	setTimeout(() => callback(user), 3000);
	
};

getUser(12, (user) => {
	console.log(user);
});