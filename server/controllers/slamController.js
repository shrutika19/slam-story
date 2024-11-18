const Slam = require('../models/slamModel');
const jwt = require('jsonwebtoken')

const postSlamUser = async (req, res) => {
    const {
        fullname,
        contact,
        dateOfBirth,
        favColor,
        favFood,
        favSong,
        favMovie,
        favWebseries,
        favCafe,
        favHobby,
        funfact,
        memory,
        message
    } = req.body

    console.log("Received payload:", req.body);

    try {
        if (
            !fullname || !contact || !dateOfBirth || !favColor || !favFood ||
            !favSong || !favMovie || !favWebseries || !favCafe ||
            !favHobby || !funfact || !memory || !message
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }


        const newSlam = new Slam({
            fullname,
            contact,
            dateOfBirth,
            favColor,
            favFood,
            favSong,
            favMovie,
            favWebseries,
            favCafe,
            favHobby,
            funfact,
            memory,
            message
        });

        // Save to database
        const savedSlam = await newSlam.save();

        // Respond with the saved document
        res.status(201).json({
            message: "Slam entry created successfully",
            data: savedSlam
        });
    } catch (error) {
        console.error("Error saving Slam entry:", error);
        if (error.code === 11000) {
            // Handle duplicate key error (e.g., unique contact field)
            return res.status(409).json({ message: "Contact already exists" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = postSlamUser;