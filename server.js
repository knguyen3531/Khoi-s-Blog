const express = require('express');
const session = require('express-session');
const passport = require('passport');
const routes = require('./controllers'); 
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Sessions middleware with a secret
app.use(session({
  secret: process.env.SESSION_SECRET, // Provide a secret key for session cookie
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
