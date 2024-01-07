const connectToMongo = require('./db');
const express = require('express');
const {sendMail} = require('./utils/sendmail');
var cors = require('cors');
require("dotenv").config();
connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


app.use('/api/auth',require('./crud/auth'));
app.use('/api/profiles', require('./crud/dashboard'))


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})
const receiverEmail = "riya_j@me.iitr.ac.in";
const senderEmail = "riyajindal769@gmail.com";
const emailSubject = "Test Email";
const emailMessage = "Hello, this is a test email from Node.js!";

sendMail(receiverEmail, senderEmail, emailSubject, emailMessage);



//********************now listen message and to do */




/************************************************Some Important Points*************************************************/
/* to make requests from one website to another website in the browser,
 which is normally prohibited by another browser policy*/
 //  express.json() to print json in the console.