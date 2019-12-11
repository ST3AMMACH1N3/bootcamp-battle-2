const router = require("express").Router();
const { contactOwner } = require("../../../controllers/emailController");

router.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;
  contactOwner({
    from: { name, email },
    subject,
    text: message
  })
    .then(() => {
      res.json({ msg: "Email Sent!" });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ msg: "Email Failed to send" });
    });
});

module.exports = router;
