const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const slamSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    contact: { type: String, required: true, unique: true },
    dateOfBirth: { type: Date, required: true },
    favColor: { type: String, required: true },
    favFood: { type: String, required: true },
    favSong: { type: String, required: true },
    favMovie: { type: String, required: true },
    favWebseries: { type: String, required: true },
    favCafe: { type: String, required: true },
    favHobby: { type: String, required: true },
    funfact: { type: String, required: true },
    memory: { type: String, required: true },
    message: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("Slam", slamSchema);
