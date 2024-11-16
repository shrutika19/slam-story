require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes')

const app = express();

// Connect to MongoDB
connectDB();

const corsOptions = {
    origin: 'http://localhost:5173', // Ensure this matches your frontend URL exactly
    credentials: true,
    exposedHeaders: ['Cross-Origin-Opener-Policy'],
};


// Middleware
app.use(cors(corsOptions));
app.use(express.json());

console.log("/api/auth', authRoutes", authRoutes)

// Routes
app.use('/api/auth', authRoutes);
// Add COOP headers

app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups'); // Adjusting policy
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp'); // You may also try commenting this out to debug
    next();
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
