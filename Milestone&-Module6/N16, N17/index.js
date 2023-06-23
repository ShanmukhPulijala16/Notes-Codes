// Why all const's because we don't want someone to override these things
const express = require('express');
const app = express();
const port = 8000;

app.use('/', require('./routes/index.js'));
// app.use('/', require('./routes'));
// This will also work as by default index.js is only chosen

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server:', err);
    }
    console.log('Server is running on port:', port);
});