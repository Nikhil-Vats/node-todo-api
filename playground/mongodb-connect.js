//const MongoClient = require('mongodb').MongoClient;
//same as code below but it also pulls out objectID 
const {MongoClient,ObjectID} = require('mongodb');
var Obj = new ObjectID();
console.log(Obj);
//destructuring an object let's say there is auser object with property name having value "nikhil" if we want to store this name property in a value we can do something like - var {propName} = objName; and the name of variable will be propName without braces
//var user = {name:'Nikhil',age:25};
//var {name} = user;
//console.log(name); //Nikhil

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err) {
    return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB Server');
//    const db = client.db('TodoApp');
//    db.collection('Todos').insertOne({
//        text:'Something to do',
//        completed:false 
//    }, (err, result) => {
//        if(err) {
//            return console.log('Unable to insert Todo');
//        }
//    const db = client.db('TodoApp');
//   db.collection('Users').insertOne({
//       name:'Nikhil',
//        age:19,
//        location:'delhi'         
//    }, (err,result) => {
//      if(err) {
//          return console.log('Unable to insert user',err)
//      } 
//       console.log(result.ops[0]._id.getTimestamp());
//   });
    //.getTimestamp() returns time stamp which is encoded in first three digits of id, if it is created by mongo.
//        console.log(JSON.stringify(result.ops,undefined,2));
//    });\
    //ops store all the documents
    client.close();
}); //takes 2 args first is string of url which contains database 