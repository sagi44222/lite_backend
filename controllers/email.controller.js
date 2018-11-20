const nodemailer = require('nodemailer');

exports.pdfFile = (req, res) => {
    //if (!req.body) {
     //   return res.status(400).send({
      //      message: "Email data cannot be empty"
       // });
    //}
    const outputData = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body}</li>
      <li>Email: ${req.body}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body}</p>
  `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        port: 25,
        auth: {
            user: 'sagi4422@gmail.com',
            pass: 'Acdc4422!!'
        },
        tls: {
            rejectUnauthorized: false
        }
    },{        from: 'Sasa <sagi4422@gmail.com>'
    });

    let HelperOptions = {
        to: 'Andris Reinman <andris.reinman@gmail.com>',
        subject: 'Majeni Contact Request',
        text: 'Hello',
        html: outputData
    };

    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("The message was sent!");
        console.log(info);
    });
    console.log("sagi")




};