const express = require('express');
const router = express.Router();

router.use('/', require('../routes/router'));
router.use('/', (req, res) => {
    res.status(404).redirect('/');
})

module.exports = router;