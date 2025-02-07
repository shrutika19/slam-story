const Slam = require("../models/slamModel");
const jwt = require("jsonwebtoken");

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
        message,
    } = req.body;

    console.log("Received payload:", req.body);
    console.log("Received file:", req.file);

    try {
        if (
            !fullname ||
            !contact ||
            !dateOfBirth ||
            !favColor ||
            !favFood ||
            !favSong ||
            !favMovie ||
            !favWebseries ||
            !favCafe ||
            !favHobby ||
            !funfact ||
            !memory ||
            !message
        ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Construct image URL
        let imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

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
            message,
            image: imageUrl, // Store image path
        });

        // Save to database
        const savedSlam = await newSlam.save();

        res.status(201).json({
            message: "Slam entry created successfully",
            data: savedSlam,
        });
    } catch (error) {
        console.error("Error saving Slam entry:", error);
        if (error.code === 11000) {
            return res.status(409).json({ message: "Contact already exists" });
        }
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to fetch all Slam entries
const getAllSlams = async (req, res) => {
    try {
        // Fetch all Slam entries from the database
        const slams = await Slam.find();

        // Check if there are any Slam entries
        if (slams.length === 0) {
            return res.status(404).json({ message: "No Slam entries found" });
        }

        // Respond with the list of Slam entries
        res.status(200).json({
            message: "All Slam entries fetched successfully",
            data: slams,
        });
    } catch (error) {
        console.error("Error fetching Slam entries:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to fetch a Slam entry by ID
const getSlamUserByid = async (req, res) => {
    const { id } = req.params;

    try {
        // Fetch the Slam entry by ID
        const slamData = await Slam.findById(id);

        if (!slamData) {
            return res.status(404).json({ message: "Slam entry not found" });
        }

        // Respond with the fetched Slam entry
        res.status(200).json({
            message: "Slam entry fetched successfully",
            data: slamData,
        });
    } catch (error) {
        console.error("Error fetching Slam entry:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { postSlamUser, getSlamUserByid, getAllSlams };
