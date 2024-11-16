const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log('Received token:', token);
    console.log('Received token2:', process.env.JWT_SECRET);

    if (!token) {
        return res.status(403).json({ message: 'Access denied, token missing' });
    }

    try {
        // Verify the token and get user data
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified user:", verified);

        // Attach user information to the request object
        req.user = verified; // Save the user data to the request object
        next(); // Call the next middleware or route handler
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;