const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/list',  (req, res) => {
  res.render('userList')
});


module.exports = router;
