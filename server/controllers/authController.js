const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('../config/firebaseAdmin')

// Register new user
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create and return JWT token
        const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        console.error(error); // Log the actual error
        res.status(500).json({ message: 'Server error' });
    }
};

//google registration
const googleRegister = async (req, res) => {
    const { firstname, lastname, email } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            user = new User({ firstname, lastname, email });
            await user.save();
        }

        const token = await admin.auth().createCustomToken(user._id.toString());
        res.status(201).json({ token });
    } catch (error) {
        console.error("Google Register Error:", error.message, error.stack); // Show more details
        res.status(500).json({ message: "Server error during Google registration" });
    }

};



module.exports = { registerUser, loginUser, googleRegister };
