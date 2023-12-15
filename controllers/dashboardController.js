const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Import the Post model
const User = require('../models/User'); // Import the User model

// GET route for the dashboard
router.get('/dashboard', async (req, res) => {
    try {
        // Assuming you have some form of authentication and user identification
        const userId = req.user.id;
        
        // Fetch posts created by the logged-in user
        const userPosts = await Post.findAll({
            where: {
                userId: userId
            }
        });

        // Render the dashboard view, passing the posts data
        res.render('dashboard', {
            posts: userPosts
        });
    } catch (error) {
        console.error('Error fetching user posts:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
