const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');

// const contact = require('./models/contact');

const Contact = require('./models/contact');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

var contactList = [
    {
        name: "Arpan",
        phone: "0987654321"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "1357902468"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});

app.get('/', async function(req, res) {
    try {
      const contacts = await Contact.find({});
      return res.render('home.ejs', {
        title: 'Contact List',
        contact_list: contacts
      });
    } catch (err) {
      console.log('Error in fetching the contacts from db!');
      return res.redirect('back');
    }
});
  
// app.get('/', function(req, res){

//     Contact.find({}, function(err, contacts){

//         if(err){
//             console.log('Error in fetching the contacts from db!');
//             return res.redirect('back');
//         }
//         return res.render('home', {
//             title: 'Contact List',
//             contact_list: contacts
//         });
    
//     });
    
// });

app.post('/create-contact', function(req, res){
    
    // contactList.push(req.body);
    // Contact.create({
    //     name: req.body.name,
    //     phone: req.body.phone
    // }, function(err, newContact){
    //     if(err){
    //         console.log('Error', err);
    //         return;
    //     }
    //     console.log('**********', newContact);

    //     return res.redirect('back');
    // });

    Contact.create({ 
        name: req.body.name, 
        phone: req.body.phone 
    })
    .then((newContact) => {
    console.log('**********', newContact);
    res.redirect('back');
    })
    .catch((err) => {
    console.log('Error', err);
    // Handle error if necessary
    });

});


app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})


// app.get('/delete-contact', function(req, res){
//     let id = req.query.id;

//     Contact.findByIdAndDelete(id, function(err){
//         if(err){
//             console.log("Error in deleting the contact with given Id");
//             return;
//         }
//         return res.redirect('back');
//     });

// });

app.get('/delete-contact', async function(req, res){
    let id = req.query.id;
    try{
        await Contact.findByIdAndDelete(id);
        return res.redirect('back');
    } catch(err){
        console.log('Error in fetchng the contacts and deleting them');
        return;
    }
});