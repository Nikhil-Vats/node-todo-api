const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

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