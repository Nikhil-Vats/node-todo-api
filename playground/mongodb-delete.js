//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err) {
    return console.log('Unable to connect to database server');
    }
    console.log('Connected to MongoDB Server');
    const db = client.db('TodoApp');

    //deleteMany
//    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    //deleteOne
//    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    })
    //findOneandDelete
//    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
//        console.log(result);
//    })
//   for users db.collection('Users').deleteMany({name:'Nikhil'}).then((result)=>{
//       console.log(result); 
//    });
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5b43780bb6b62a324c0c1436")}).then((result)=>{
       console.log(JSON.stringify(result,undefined,2)); 
    });
    client.close();
}); 