const express = require('express');
const router = express.Router();
const passport = require('../config/passport'); // Passport.js configuration

// Define routes and actions for user authentication
router.post('/signup', passport.authenticate('local-signup'), (req, res) => {
  // Handle successful signup
  res.redirect('/dashboard');
});

router.post('/login', passport.authenticate('local-login'), (req, res) => {
  // Handle successful login
  res.redirect('/dashboard');
});

router.get('/logout', (req, res) => {
  // Logout the user and redirect to the homepage
  req.logout();
  res.redirect('/');
});

module.exports = router;
