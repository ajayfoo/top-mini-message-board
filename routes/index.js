var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const { msgName, msgText } = req.body;
  messages.push({ text: msgText, user: msgName, added: Date.now() });
  res.redirect("/");
});

module.exports = router;
