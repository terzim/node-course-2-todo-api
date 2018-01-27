const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
	console.log(result);
});

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '12345a'}).then((todo) => {
// 	console.log(todo);
// });

// Todo.findByIdAndRemove('asdf').then((todo) => {
// 	console.log(todo);
// });