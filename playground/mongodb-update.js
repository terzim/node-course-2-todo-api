/*jshint esversion: 6 */

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, database) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	const myDatabase = database.db('TodoApp');

	console.log('Connected to MongoDB server');

	// myDatabase.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("5a6c496baf4819c3b82607c2")
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	myDatabase.collection('Users').findOneAndUpdate({
		_id: new ObjectID("5a6c4b99af4819c3b826082f")
	}, {
		$set: {
			name: 'Eduardo'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log('cambiato nome e diventato maggiorenne');
		console.log(result);
	});



	// database.close();
});