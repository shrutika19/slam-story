const express = require('express');
const { registerUser, loginUser, googleRegister } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-register', googleRegister);

module.exports = router;
