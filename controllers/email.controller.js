const nodemailer = require('nodemailer');

exports.pdfFile = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Email data cannot be empty"
        });
    }
    console.log(req.body);
    const outputData = `
        <p>Dear ${req.body.name}, </p>
        <br>
        <p>Attached Please find your fertilizer plan.</p>
  ` ;

    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false,

        auth: {
            user: 'sagi.gliksman@smart-fertilizer.com',
            pass: 'Acdc4422!!'
        },
        tls: {
           // rejectUnauthorized: false
            ciphers: 'SSLv3'
        },
            requireTLS: true
    }

    );

    let HelperOptions = {
        from: 'Info <sagi.gliksman@smart-fertilizer.com>',
        to: 'sagi <sagi4422@gmail.com>',
        subject: 'SMART Fertilizer - Fertilizer plan',
        text: 'Dear' + req.body.name + "," +'/n' + "Please find attached your fertilizer plan.",
        attachments: [{
            filename: 'Smart-TestResults.pdf',
           // content: req.body.pdf,
            //encoding: 'base64'
            path: req.body.pdf
        }],
        html: outputData
    };

    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);

        }

        console.log("The message was sent!");
        console.log(info);
    });
    return res.status(200).send({message: 'Email sent'});




};