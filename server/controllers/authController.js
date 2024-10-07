const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
// login user
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


module.exports = { registerUser, loginUser };
