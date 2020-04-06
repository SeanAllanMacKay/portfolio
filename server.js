const express = require("express");
const path = require("path");
const nodemailer = require('nodemailer');

const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.json());

http.listen(process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seanallanmackay@gmail.com',
    pass: process.env.PASSWORD
  }
})

app.post('/send-email', (req, res) => {
  const {
    email,
    name,
    subject,
    body
  } = req.body

  if(email && name && subject && body){
    transporter.sendMail({
      from: `${email}`,
      to: 'Sean MacKay <seanallanmackay@gmail.com>',
      replyTo: `${email}`,
      subject: `Email from ${name} via seanmackay.ca`,
      html: ` <p><span style="font-weight: bold;">Name:</span> ${name}</p>
              <p><span style="font-weight: bold;">Subject:</span> ${subject}</p>
              <p><span style="font-weight: bold;">Message:</span> ${body}</p>`,
    }, (error, info) => {
      if(error){
        console.log(error)
        res.status(500).send({ success: false, message: "There was an error sending this email." })
      } else {
        res.status(200).send({ success: true, message: "Email sent" })
      }
    })
  } else {
    console.log(req.body)
    res.status(500).send({ success: false, message: "There was an error sending this email." })
  }

})