const express = require('express');
const router = express.Router();

const tweets = require('./tweets');
const users = require('./users');
const logger = require('./middleware/logger');

router.use(logger);
router.use('/users',users)
router.use('/tweets',tweets)

module.exports = router;