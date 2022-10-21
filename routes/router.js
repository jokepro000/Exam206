const express = require('express');
const router = express.Router();

const RouterControllers = require('../controllers/RouterControllers');

router.get('/', RouterControllers.index);
router.get('/admission', RouterControllers.admission);
router.get('/academic',RouterControllers.academic);
router.get('/research',RouterControllers.research);
router.get('/contact',RouterControllers.contact);
router.get('/login',RouterControllers.login);


router.get('/error', RouterControllers.error);

module.exports = router;