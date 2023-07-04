const mongoose = require('mongoose');
mongoose.connect('mongodb://27017/codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to the database"));

db.once('open', function(){
    console.log("Connected to Database: MongoDB");
});

module.exports = db;