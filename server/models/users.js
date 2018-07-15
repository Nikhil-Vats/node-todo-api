const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ =  require('lodash');
//schema is model + methods
var UserSchema = new mongoose.Schema({
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
//due to this keyword we are not using arrow functions, to UserSchema.methods we can add instance methods
UserSchema.methods.toJSON = function () {
  var user = this;
    var userObject = user.toObject();
    return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function () {
    var user  = this;
    var access = 'auth';
    var token = jwt.sign({_id:user._id.toHexString(), access},'abc123').toString();
    user.tokens = user.tokens.concat([{
        access,
        token
    }]);
    return user.save().then(() => {
        return token;
    });
};
//Schema is for instance methods statics is for model methods
UserSchema.statics.findByToken = function (token)  {
  var User = this;
    var decoded;
    //we are not adding jwt verify to decoded because if it throws error our var will store error which is wrong so we use try catch
    
    try {
     decoded = jwt.verify(token,'abc123'); 
    } catch(e) {
//    return new Promise((resolve,reject) => {
//        reject();
//    }); same as
     return Promise.reject();   
    }
return User.findOne({
   '_id':decoded._id,
    //wrap in '' for nested value like token and access in tokens
    'tokens.token': taken,
    'tokens.access':'auth'
});
};

var User = mongoose.model('User',UserSchema);

module.exports = {User};