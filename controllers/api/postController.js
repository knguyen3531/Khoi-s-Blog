const express = require('express');
const router = express.Router();

// Import the Post model
const { Post } = require('../models');

// Route to get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route to create a new post
router.post('/posts', async (req, res) => {
  try {
    // Assuming req.body contains title and content
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      // Add other necessary fields like userId, etc.
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
