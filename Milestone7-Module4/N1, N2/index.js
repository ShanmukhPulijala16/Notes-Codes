const express = require('express');      
const path = require('path');
const { title } = require('process');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name: "Shanmukh",
        phone: "9876543210"
    },
    {
        name: "Table",
        phone: "1234567890"
    },
    {
        name: "Bluetooth",
        phone: "1357902468"
    }
]

app.get('/', function(req, res){
    return res.render('home.ejs', {
        title : 'Contact List',
        contact_list : contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice.ejs', {
        title: "Let's play with EJS"
    });
});

app.post('/create-contact', function(req, res){
    return res.redirect('/practice');
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('My Express Server is running on Port: ', port);
    
});
