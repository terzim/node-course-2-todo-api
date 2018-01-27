var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then(() => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Save todo', doc)
// }, (e) => {
// 	console.log('Unable to save todo');
// })

// var otherTodo = new Todo({
// 	text: 'Feed the cat',
// 	completed: true,
// 	completedAt: 123
// });

// otherTodo.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save', e);
// });

// New User model
// email - required - trimmed - type and minlength
// 

// var user = new User({
// 	email: 'john@doe.com'
// });

// user.save().then((doc) => {
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save', e);
// });

module.exports = {app};