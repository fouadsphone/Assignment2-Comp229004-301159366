// Do not expose your credentials in the code for Production Environment.
let atlasDB = "mongodb+srv://assignment2.1ilm7iv.mongodb.net/Assignment2";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongoDb = mongoose.connection;

    mongoDb.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDb.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDb;
}