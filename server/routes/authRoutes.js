const express = require("express");
const {
    registerUser,
    loginUser,
    googleRegister,
    updateUserProfile,
} = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
    postSlamUser,
    getSlamUserByid,
    getAllSlams,
} = require("../controllers/slamController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/google-register", googleRegister);
router.post("/update-profile", authMiddleware, updateUserProfile);
//router.post('/update-slam', postSlamUser)
// Use `upload.single('image')` to handle single image uploads
router.post("/update-slam", upload.single("image"), postSlamUser);

// GET route to fetch Slam entry by ID
router.get("/slam/:id", getSlamUserByid);
router.get("/slams", getAllSlams);

module.exports = router;
