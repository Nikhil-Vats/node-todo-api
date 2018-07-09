//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err) {
    return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
//    db.collection('Todos').findOneAndUpdate({
//        _id:new ObjectID("5b439c253669ff3bf60eefae")
//    },{
//      $set: {
//          completed:false
//      }  
//    },{
//        returnOriginal:false  //rerurns updated object
//    }).then((result) => {
//        console.log(result);
//    });
    //findOneAndUpdate(filter,update,options,callback) is the syntax we can use a promise instead of callback,update using update operators
    
    //for Users
    db.collection('Users').findOneAndUpdate({
        name:'Deepanshu'
    },{
        $set:{
            name:'Nikhil'
        },
        $inc: {age:1 }
            
        },{returnOriginal:false
    }).then((result)=>{
       console.log(result); 
    });
    client.close();
}); 