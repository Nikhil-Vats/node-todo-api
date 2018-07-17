const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/users');
const jwt = require('jsonwebtoken');


const userOneID = new ObjectID();
const userTwoID = new ObjectID();
const users = [{
    _id: userOneID,
    email:'Nikhil@example.com',
    password:'apassword',
    tokens:[{
    access:'auth',
    token:  jwt.sign({_id:userOneID,access:'auth'},'abc123').toString() 
}]
},{
    _id:userTwoID,
    email:'jen@example.com',
       password:'mypassword',
    tokens:[{
    access:'auth',
    token:  jwt.sign({_id:userTwoID,access:'auth'},'abc123').toString() 
}]
}];
const todos = [{
    _id:new ObjectID(),
    text :'First test todo',
    _creator:userOneID
},{
    _id:new ObjectID(),
    text:'Second test todo',
    completed:true,
    completedAt:333,
    _creator:userTwoID
}];

const populateUsers = (done) => {
    User.remove({}).then((done) => {
  var userOne =new User(users[0]).save();
        var userTwo =new User(users[1]).save();
        //Promise.all executes then only if userOne and UserTwo were sucessfully resolved(saved).
       return Promise.all([userOne,userTwo])
    }).then(() => done());
};

const populateTodos = (done) => {
   Todo.remove({}).then(() => {
    return Todo.insertMany(todos);                          
        }).then(() => done());
};


module.exports = {todos,populateTodos,users,populateUsers};