const sgMail = require('@sendgrid/mail');

// const sgMailApiKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const resumeRequest = ({ name, email, optionalMessage }) => {
    return `<div>
    <h1>${name} is interested in your Resume:</h1>
    <h2>Email: ${email}</h2>
    <p style="font-size: medium;">${optionalMessage}</p>
    <form action="${process.env.RESUMEREQ_URI}reject/${email}" method="post" target="_blank" style="display: inline-block;">
        <input style="background-color: red; color: white; font-weight: bold;" type="submit" value="Reject" />
    </form>
    <form action="${process.env.RESUMEREQ_URI}approve/${email}" method="post" target="_blank" style="display: inline-block;">
        <input style="background-color: #4DB516; color: white; font-weight: bold;" type="submit" value="Approve" />
    </form>
    </div>`;
};

// Send Reject email
const rejectRequestTemplate = (name) => {
    return `<div>
    <h2>Hi ${name},</h2>
    <p style="font-size: medium;">I am not able to send you my resume right now, I apologize for any inconvenience.</p>
    <strong style="font-size: medium;">Sincerely,</strong><br>
    <strong style="font-size: medium;"><i>Sergio Rojas</i></strong>
    </div>`;
};

// Send Approve email
const approveRequestTemplate = (name) => {
    return `<div>
    <h2>Hi ${name},</h2>
    <p style="font-size: medium;">Thank you for your interest.<br>Here is the link where you can view and download my resume:</p>
    <a style="font-size: medium;" href="${process.env.RESUME_LINK}">SR_Resume</a>
    <p style="font-size: medium;">I'm looking forward to hearing from you,</p>
    <p style="font-size: medium;">Thanks a lot,</p>
    <p style="font-size: medium;">Kind regards!</p>
    <p style="font-size: medium;"><strong><i>Sergio Rojas</i></strong><br><strong><i>Web Developer</i></strong></p>
    </div>`;
};


module.exports = { resumeRequest, rejectRequestTemplate, approveRequestTemplate };