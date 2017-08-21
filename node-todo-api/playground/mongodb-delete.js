// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err)
		return console.log('Error: ', err);
	console.log('Connected to MongoDB server');

	// deleteMany
	db.collection('Todos').deleteMany({text: 'Walk with Gumball'});

	// deleteOne


	// findOneAndDelete


	db.close();
});