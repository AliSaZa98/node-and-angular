var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'alisaghebzabihi98@gmail.com',
        pass: 'ali@0924361344'
    }
});

var mailOptions = {
    from: 'alisaghebzabihi98@gmail.com',
    to: 'alizabihi1997@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

exports.sendMail = (req, res, next) => {
    console.log('in export send mail');
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


