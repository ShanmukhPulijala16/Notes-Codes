// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/contacts_list_db');
// mongoose.connect('mongodb://localhost/contacts_list_db');
// The just above command (^) did not work for me.

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error (If there is an error)
db.on('error', console.error.bind(console, 'Error connecting to db'));

// Up and running, then print the message
db.once('open', function(){
    console.log("Succesfully connected to the database");
});