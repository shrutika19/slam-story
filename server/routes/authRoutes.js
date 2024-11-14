const express = require('express');
const { registerUser, loginUser, googleRegister, updateUserProfile } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-register', googleRegister);
router.post('/update-profile', authMiddleware, updateUserProfile);

module.exports = router;
