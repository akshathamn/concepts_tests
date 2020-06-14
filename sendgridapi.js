require('dotenv').config();
console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.SENDGRID_API_KEY);

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// var  SENDGRID_API_KEY='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';
// sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: 'anandakumar@qwinix.io',
  from: 'akshathamn96@gmail.com',
  subject: 'Request for password change',
  text: 'Click the link here to reset the password',
  html: '<strong>Click the link here to Reset your password</strong>',
};
sgMail.send(msg);