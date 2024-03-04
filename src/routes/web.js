const { getHomePage, CreateNewUser } = require('../controller/homeController');
const express = require('express');
const router = express.Router();
router.get('/', getHomePage);
router.post('/create_new_user', CreateNewUser);

module.exports = router;
