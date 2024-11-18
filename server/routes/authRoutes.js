const express = require('express');
const { registerUser, loginUser, googleRegister, updateUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const postSlamUser = require('../controllers/slamController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/google-register', googleRegister);
router.post('/update-profile', authMiddleware, updateUserProfile);
router.post('/update-slam', postSlamUser)

module.exports = router;
