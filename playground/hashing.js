const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '13abc';
//first para is no of rounds to gen salt, second para is callback making it an async fn
bcrypt.genSalt(10,(err,salt) => {
   bcrypt.hash(password,salt,(err,hash) => {
      console.log(hash); 
   }); 
});

var hashedPassword = '$2a$10$4scX9R4dgrG78A2kdEUilu5Uoy3WbyXlMcug9v9hiRq0U6OXlrWdy';

bcrypt.compare(password,hashedPassword,(err,res) => {
   //res is true if they match and false otherwise
    console.log(res);
});
//jst.sign() - takes data, creates hash and returns token
//
//jwt.verify() takes token and secret and makes sure token was not manipulated
var data = {
    id:10
};
var token = jwt.sign(data,'123abc');
console.log(token);

var decoded = jwt.verify(token,'123abc');
//if we manipualate secret or token jwt.verify shows an error 
console.log(decoded);

//var message = 'I am user number 3';
//var hash = SHA256(message).toString();
//console.log(`message ${message}`);
//console.log(`Crypted message ${hash}`);
//
//var data = {
//    id:4
//};
//
//var token = {
//    data,
//    hash:SHA256(JSON.stringify(data)+'somesecret').toString()
//};
//
//token.data.id = 5;
//token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
//if(resultHash === token.hash) {
//    console.log('Data was not changed');
//} else {
//    console.log('Data was changed.Do not trust.');
//}