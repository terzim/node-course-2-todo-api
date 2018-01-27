/*jshint esversion: 6 */

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	const myDatabase = database.db('TodoApp');

	console.log('Connected to MongoDB server');

	// deleteMany
	// myDatabase.collection('Todos').deleteMany({text: 'go to school'}).then((result) => {
	// 	console.log(result);
	// });

	// deleteOne
	// myDatabase.collection('Todos').deleteOne({text: 'go to school'}).then((result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// myDatabase.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// database.close();
});