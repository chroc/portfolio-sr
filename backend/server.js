const express = require('express');
const sgMail = require('@sendgrid/mail');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Recruiter = require('./models/recruiterModel');

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.send('Hey there!')
});

// POST request resume
app.post('/api/resume', async (req, res) => {
    // save recruiter
    const recruiter = new Recruiter({ name: req.body.name, email: req.body.email });
    try {
      await recruiter.save();
      console.log(`Recruiter ${req.body.name} saved!`.green);

      // send email

      res.status(201).send({ recruiter });
    } catch (error) {
      console.log(error.message.red);
      res.status(400).send();
    }
});

app.listen(port, () => {
  console.log(`Portfolio API listening on port ${port}...`.cyan.bold)
});