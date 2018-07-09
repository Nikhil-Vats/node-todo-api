//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err) {
    return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');
//    
//    db.collection('Todos').find({
//        _id:
//        new ObjectID("5b4376448d590d2d4cbe2194")}).toArray().
//    //find only those values whose completed property is false
//    then((docs)=> {
//        console.log('Todos');
//        console.log(JSON.stringify(docs,undefined,2));
//        //undefined is for filter functions
//    },(err) => {
//        console.log('Unable to fetch todos',err); 
//    });
    //find returns a cursor which is a pointer to documents
    //toArray returns array of documents as a promise
        
//    db.collection('Todos').find().count().
//    //find only those values whose completed property is false
//    then((count)=> {
//        console.log('Todos count: ',count);
//       
//        //undefined is for filter functions
//    },(err) => {
//        console.log('Unable to fetch todos',err);
//    });
//    
    db.collection('Users').find({name:'Nikhil'}).toArray().then((docs) =>{
        console.log('users');
        console.log(JSON.stringify(docs,undefined,2));
    },(err) => {
        console.log('Unable to fetch users ',err);
        
    });
    
    client.close();
}); 