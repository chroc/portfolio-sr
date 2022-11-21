const sgMail = require('@sendgrid/mail');

// const sgMailApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const resumeRequest = ({ name, email, optionalMessage }) => {
    return `<div>
    <h1>Recruiter ${name} is interested in your Resume:</h1>
    <h2>${email}</h2>
    <p>${optionalMessage}</p>
    <a href="${process.env.RESUMEREQ_URI}reject/${email}">Reject</a>
    <br>
    <a href="${process.env.RESUMEREQ_URI}approve/${email}">Approve</a>
    </div>`;
};

// Send Reject email

const rejectRequestTemplate = (name) => {
    return `<div>
    <h2>Hi ${name}</h2>
    <p>I am not able to send you my resume right now, I apologize for any inconvenience</p>
    <strong>Sincerely,</strong>
    <strong><i>Sergio Rojas</i></strong>
    </div>`;
};

// Send Approve email
const approveRequestTemplate = (name) => {
    return `<div>
    <h2>Hi ${name}!</h2>
    <p>Thank you for your interest.<br>Here is the link where you can view and download my resume:</p><br>
    <a href="${process.env.RESUME_LINK}">SR_Resume</a>
    <p>I'm looking forward to hearing from you,</p>
    <p>Thanks a lot,</p>
    <p>Kind regards!</p>
    <p><strong><i>Sergio Rojas</i></strong><br><strong><i>Web Developer</i></strong></p>
    </div>`;
};


module.exports = { resumeRequest, rejectRequestTemplate, approveRequestTemplate };