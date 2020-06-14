var express = require('express');
var router = express.Router();
const User = require('../models/signin') 
// exports.login = 
router.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  const ret = await user.save();
  res.json(ret);
});
// exports.getlogin =
router.get("/", async (req, res) => {
  User.find({}, (error, user) => {
    if (error) { res.json(error) }
 res.json(user)
})
});
module.exports = router;





















