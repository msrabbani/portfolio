require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

function login(req, res) {
  console.log(req.params.userid);
  let token = jwt.sign({userid: req.params.userid}, secret, {expiresIn:'1h'})
  console.log('success');
  res.send(token);
}

module.exports = {
  login
}
