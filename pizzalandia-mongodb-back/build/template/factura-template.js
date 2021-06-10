"use strict";
const nodemailer = require('nodemailer');
var sendEmail = function (somedata) {
    var smtpConfig = {
        Host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        // you can try with TLS, but port is then 587
        auth: {
            user: '***@gmail.com',
            pass: '****' // Your password
        }
    };
    var transporter = nodemailer.createTransport(smtpConfig);
    // replace hardcoded options with data passed (somedata)
    var mailOptions = {
        from: 'xxxx@gmail.com',
        to: 'yyyy@gmail.com',
        subject: 'Test email',
        text: 'this is some text',
        html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return false;
        }
        else {
            console.log('Message sent: ' + info.response);
            return true;
        }
        ;
    });
};
exports.contact = function (req, res) {
    // call sendEmail function and do something with it
    sendEmail(somedata);
};
