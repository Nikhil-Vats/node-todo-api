const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ =  require('lodash');
const bcrypt = require('bcryptjs');

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
        token: {
            
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
    'tokens.token': token,
    'tokens.access':'auth'
});
};
UserSchema.statics.findByCredentials = function (email,password) {
    var User = this;
    return User.findOne({email}).then((user) => {
        if(!user) {
            return Promise.reject();
        }
//all of the bcrypt methods support callbacks not promises
       return new Promise((resolve,reject) => {
          bcrypt.compare(password,user.password,(err,res) => {
            if(res) {
                resolve(user);
            }  else {
                reject();
            }
             
          }); 
       }); 
    });
};
//first arg is save means because save fn this fn is executed, next is a must to call so that after this the main fn works
UserSchema.pre('save',function(next) {
        var user = this;
        
        if(user.isModified('password')) {
        bcrypt.genSalt(10,(err,salt) => {
           bcrypt.hash(user.password,salt,(err,hash)=> {
              user.password = hash;
               next();
           });  
        });
    }   else {
        next();
    }
               
});

var User = mongoose.model('User',UserSchema);

module.exports = {User};