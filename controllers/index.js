const express = require('express');
const router = express.Router();

// Import your controller files
const homeController = require('./homeController');
const dashboardController = require('./dashboardController');
const postController = require('./api/postController');
const userController = require('./api/userController');

// Define routes by using the imported controllers
router.use('/', homeController);
router.use('/dashboard', dashboardController);
router.use('/api/posts', postController);
router.use('/api/users', userController);

module.exports = router;
