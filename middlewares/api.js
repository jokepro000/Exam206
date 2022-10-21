const express = require('express');
const router = express.Router();

router.use('/authentication', require('../routes/auth'));

module.exports = router;