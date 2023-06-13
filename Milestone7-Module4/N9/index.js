const express = require('express');      
const path = require('path');
const { title } = require('process');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

// MiddleWare 1
app.use(function(req, res, next){
    req.myName = 'Shanmukh';
    next();
});

// MiddleWare 2
app.use(function(req, res, next){
    console.log("From MiddleWare 2 - myName = ", req.myName);
    next();
});


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
    console.log("From get controller - myName = ", req.myName);
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
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    // OR
    
    contactList.push(req.body);


    // return res.redirect('/');
    // OR
    return res.redirect('back');
    // The 'back' takes you back to there where the form is actually located(i,e. url)
});

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server', err);
    }

    console.log('My Express Server is running on Port: ', port);
    
});
