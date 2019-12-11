const db = require("../models");
const { sendRegistrationEmail } = require("./emailController");

exports.registerUser = (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  db.User.create({ email, password })
    .then(user => {
      if (!user) throw new Error("Failed To Create User");
      return sendRegistrationEmail({ email, data: { id: user.id } });
    })
    .catch(err => console.log(err));
};

exports.requestPasswordChange = (req, res) => {
  let { email } = req.body;
  db.User.find({ where: { email } }).then(user => {
    if (!user) throw new Error();
  });
};
