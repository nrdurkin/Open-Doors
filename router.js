var express = require('express');
var handler = express.Router();

var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'opendoorsmailer@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
});


handler.get('/', (req, res) => {
    res.render('index', {
        title: 'Open Doors'
    });
});

handler.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us'
    });
});

handler.get('/board', (req, res) => {
    res.render('board', {
        title: 'About Us'
    });
});

handler.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    });
});

handler.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact'
    });
}).post('/contact', (req, res) =>{
    let mailOptions = {
        to: 'opendoorsmailer@gmail.com', // list of receivers
        subject: `Contact Page Email: ${req.body.subject}`, // Subject line
        text: `Sender Name: ${req.body.name}\nEmail Address: ${req.body.email}\nSubject: ${req.body.subject}\n\nMessage:\n${req.body.message}`, // plain text body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.response);
    });
    res.send('success');
});

module.exports = handler;