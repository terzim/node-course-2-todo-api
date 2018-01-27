const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a6c991800c6a7218c0ca276';

// if (!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById

var id = '5a6c5353723e4d441e2eb048';

User.findById(id).then((user) => {
	if(!user) {
		return console.log('Unable to find user');
	}

	console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
	console.log(e);
});