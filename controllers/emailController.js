const sendGrid = require("@sendgrid/mail");
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);

const templates = {
  registration: "",
  updatePassword: ""
};

exports.contactOwner = body => {
  return sendGrid.send({ to: process.env.EMAIL, ...body });
};

exports.sendRegistrationEmail = options => {
  const msg = {
    to: options.email,
    from: process.env.EMAIL,
    templateId: templates.registration,
    dynamic_template_data: options.data
  };
  console.log(msg);
  return new Promise((resolve, reject) => resolve("Sent"));
  // return sendGrid.send(msg);
};

exports.sendUpdatePasswordEmail = options => {
  const msg = {
    to: options.email,
    from: process.env.EMAIL,
    templateId: templates.updatePassword,
    dynamic_template_data: options.data
  };
  console.log(msg);
  return new Promise((resolve, reject) => resolve("Sent"));
  // return sendGrid.send(msg);
};
