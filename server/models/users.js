const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User',{
    email: {
        type:String,
        required:true,
        minLength:1,
        trim:true,
        unique:true, //makes a unique email
        validate: {
            validator: validator.isEmail,
            //return true for valid and false for invalid    
            message: '{VALUE} is not a valid email'
        }
    },
    password:{
        type:String,
        require:true,
        minLength:6
    },
    tokens: [{
        access:{
            type:String,
            require:true
        },
        tokens: {
            
            type:String,
            require:true
        }
    }]
});

module.exports = {User};