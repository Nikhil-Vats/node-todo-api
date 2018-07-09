var mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text: {
        type:String,
    },
    completed: {
        type:Boolean,
    },
    completedAt: {
        type:Number
    }
});
//
//var newTodo = new Todo({
//    text:'Cook dinner'
//});
//
//newTodo.save().then((docs) => {
//    console.log('Saved todo ',docs)
//},(e) => {
//    console.log('Unable to save todo')
//});

var Todo2 = new Todo({
    text:'Do exercise',
    completed:true,
    completedAt: new Date().getHours()
});

Todo2.save().then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
},(e) => {
         console.log('Unable to connect')         
});
