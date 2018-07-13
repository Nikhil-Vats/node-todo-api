var express = require('express');
var bodyParser = require('body-parser');
//express lets us make a server and deploy our application on a local host
//body-parser lets us send string type JSON objects to server
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    console.log(req.body);
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

//to read data - GET '/todos'

app.listen(3000, () => {
   console.log('Started on port 3000'); 
});

//we can also check http statuses like 200,404 for errors go to httpstatuses.com for more info
//var newTodo = new Todo({
//    text:'Cook dinner'
//});
//
//newTodo.save().then((docs) => {
//    console.log('Saved todo ',docs)
//},(e) => {
//    console.log('Unable to save todo')
//});

//var Todo2 = new Todo({
//    text:'Something to do'   //typecasting exists so we can set text to a number or a boolean and it will be converted to a string
//});


//
//var user = new User({
//   email:'nikvats5499@gmail.com' 
//});
//
//user.save().then(() => {
//    console.log('User saved');
//}, (e) => {
//   console.log('Unable to save user', e); 
//});

//Todo2.save().then((doc)=>{
//    console.log(JSON.stringify(doc,undefined,2));
//},(e) => {
//         console.log('Unable to connect');        
//});
