const express = require('express');
const { mainController, authenticationController } = require('../controllers');

const router = express.Router();

router.get('/home', authenticationController.isAuthenticated, mainController.home);

module.exports = router;
