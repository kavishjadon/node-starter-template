const express = require('express');
const authenticationRoutes = require('./authentication.route');
const mainRoutes = require('./main.route');

const router = express.Router();

router.use(authenticationRoutes);
router.use(mainRoutes);

module.exports = router;
