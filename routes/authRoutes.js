const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/entrar', authController.loginForm);
router.post('/entrar', authController.entrar);

router.post('/logout', authController.logout);




module.exports = router;