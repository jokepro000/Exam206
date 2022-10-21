const express = require('express');
const router = express.Router();

const AuthenticationControllers = require('../controllers/AuthenticationControllers');

router.post('/login', AuthenticationControllers.login);
router.get('/logout', AuthenticationControllers.logout);
module.exports = router;