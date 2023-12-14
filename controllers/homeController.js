const express = require('express');
const User = require('../models/User'); // Use the relative path to the User model
const Post = require('../models/Post'); // Import Post model with a different variable name
const router = express.Router();

// Define routes and actions
router.get('/', async (req, res) => {
  try {
    // Fetch existing blog posts from the database
    const posts = await Post.findAll({ order: [['createdAt', 'DESC']] });

    // Render the homepage view with the posts
    res.render('home', { posts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
