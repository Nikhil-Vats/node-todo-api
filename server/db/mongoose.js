var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};

//process.env.NODE_ENV === 'production' for heroku
//process.env.NODE_ENV === 'developmen' for local
//process.env.NODE_ENV === 'test' for mocha
