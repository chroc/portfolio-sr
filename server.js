const express = require('express');
const sgMail = require('@sendgrid/mail');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const { verify } = require('hcaptcha');
const connectDB = require('./backend/config/db');
const Recruiter = require('./backend/models/recruiterModel');
const { resumeRequest, rejectRequestTemplate, approveRequestTemplate } = require('./backend/utils');

dotenv.config();

// connectDB(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST request Resume
app.post('/api/resume', async (req, res) => {
  let errorMessage = '';
  const email = req.body.email;
  // const newRecruiter = await Recruiter.findOne({ email });

  try {
    // captcha
    const secret = process.env.HCAPTCHA_SECRETKEY;
    const token = req.body.token;
    const hcaptchaData = await verify(secret, token);
    // hcaptchaData.success
    // console.log(hcaptchaData);

    if (hcaptchaData.success) {
      console.log('hCaptcha verification success!'.green);
      // verify the email has not been registered yet

      // send email to admin
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: process.env.EMAIL_ADMIN,
        from: process.env.EMAIL_SENDER,
        subject: `New Portfolio Request from ${email}`,
        html: resumeRequest(req.body),
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log(`Email sent!`)
        })
        .catch((error) => {
          console.error(error.red)
        });

      const message = 'Thank you! I will contact you soon';
      res.status(201).send({ message });
    } else {
      errorMessage = 'hCaptcha verification failed';
      console.log(errorMessage.red);
      res.status(400).send({ errorMessage });
    }
  } catch (error) {
    errorMessage = error.message;
    console.log(errorMessage.red);
    res.status(400).send({ errorMessage });
  }
});

// GET reject req
app.get('/api/reject/:email', async (req, res) => {
  const recruiterEmail = req.params.email;
  try {
    // const recruiter = await Recruiter.findOne({ email: recruiterEmail });
    // console.log(recruiter);
    // send reject email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: recruiterEmail,
      from: process.env.EMAIL_SENDER,
      subject: `Resume request not possible`,
      html: rejectRequestTemplate(recruiter.name),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log(`Rejected email sent`.green)
      })
      .catch((error) => {
        console.error(error.red)
      });
    res.status(200).send({ message: 'Rejected email sent!' });
  } catch (error) {
    console.log(error.message.red);
    res.status(500).send();
  }
});

// GET approve req
app.get('/api/approve/:email', async (req, res) => {
  const recruiterEmail = req.params.email;
  try {
    // const recruiter = await Recruiter.findOne({ email: recruiterEmail });
    // send approve email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: recruiterEmail,
      from: process.env.EMAIL_SENDER,
      subject: `Resume Sergio Rojas`,
      html: approveRequestTemplate(recruiter.name),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log(`Approved email sent!`.green)
      })
      .catch((error) => {
        console.error(error.red)
      });
    res.status(200).send({ message: 'Approved email sent!' });
  } catch (error) {
    console.log(error.message.red);
    res.status(500).send();
  }
  // res.send('Approve resume request');
});

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

// Run Server...
app.listen(port, () => {
  console.log(`Portfolio API listening on port ${port}...`.cyan.bold)
});