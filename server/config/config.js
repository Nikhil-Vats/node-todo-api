var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
    var config = require('./config.json');
//config is required and imported as a js object
    var envConfig = config[env];
//env has all the variables in test/development whatever the environment is like port,mongodb_uri,jwt    
    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig;
    });

}

//if(env === 'development') {
//    process.env.PORT = 3000;
//    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
//} else if(env === 'test') {
//     process.env.PORT = 3000;
//        process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
//}