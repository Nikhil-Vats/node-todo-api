const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users.js');

//var id = 'b492a086a183d1aa469ba3a';
//
//if(!ObjectID.isValid(id)) {
//    console.log('ID not valid');
//}

//Todo.find({
//    _id: id
//}).then((todos) => {
//console.log('Todos ',todos);
//});
//
//Todo.findOne({
//       _id: id
//}).then((todo) => {
//console.log('Todo ',todo);
//});

//Todo.findById(id).then((todo) => {
//    if(!todo) {
//        return console.log('ID not found');
//    }
//console.log('Todo by id ',todo);
//}).catch((e) => console.log(e));

User.findById('5b48efa32dfa4f37accc4c37').then((user) => { if (!user) {
    return console.log('Unable to find user');
}
console.log(JSON.stringify(user,undefined,2));    
},(e) => {
    console.log(e);
});