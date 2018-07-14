const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users.js');

//Todo.remove same as Todo.find but Todo.find() finds all the docs but Todo.remove() shows an error to remove all use Todo.remove({})

//Todo.remove({}).then((result) => {
//   console.log(result); 
//});

//returns only the number of removed items

//Todo.findOneAndRemove()

Todo.findOneAndRemove({_id:''}).then((todo) => {
    console.log(todo);
})

//returns the removed item as well

//Todo.findByIdAndRemove('5b49f9cbbd17195fd0b62747').then((todo) => {
//    console.log(todo);
//});

//same as findOneAndRemove but only works with id
