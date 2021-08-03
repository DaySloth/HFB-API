const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const { resetPasswordHTML, accountCreatedHTML } = require("./emailHtmlGen.js");

module.exports = {
  sendCreatedEmail: async (email, subject) => {
    const msg = {
      to: `${email}`, // Change to your recipient
      from: {
        email: "support@hfbmobile.com",
        name: "HFB Mobile Support",
      }, // Change to your verified sender
      subject: `${subject}`,
      html: await accountCreatedHTML(),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  },
  sendTempPasswordEmail: async (email, subject, message) => {
    const msg = {
      to: `${email}`, // Change to your recipient
      from: {
        email: "support@hfbmobile.com",
        name: "HFB Mobile Support",
      }, // Change to your verified sender
      subject: `${subject}`,
      html: await resetPasswordHTML(message),
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  },
  sendSMS: (body, phone_number) => {
    client.messages.create({
      body: body,
      to: phone_number, // Text this number
      from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
    });
  },
};
