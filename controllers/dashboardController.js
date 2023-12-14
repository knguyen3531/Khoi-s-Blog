const express = require('express');
const router = express.Router();

// Import the Post model
const { Post } = require('../models');

// Define routes and actions
router.get('/dashboard', async (req, res) => {
  try {
    // Fetch blog posts created by the logged-in user from the database
    const userId = req.user.id; // Assuming you have implemented user authentication
    const userPosts = await Post.findAll({ where: { userId }, order: [['createdAt', 'DESC']] });

    // Render the dashboard view with the user's posts
    res.render('dashboard', { userPosts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
