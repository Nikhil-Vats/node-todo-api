var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text: {
        type:String,
        required:true,
        minLength:1,
        trim:true
    },
    completed: {
        type:Boolean,
        default:false
    },
    completedAt: {
        type:Number,
        default:null
    },
    _creator: {
        required:true,
        type:mongoose.Schema.Types.ObjectId
    }
});
//we added id to Todo model so that a user can update only his todos by verifying id
module.exports = {Todo};