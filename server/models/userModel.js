const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String },          // Optional field for contact number
    dateOfBirth: { type: Date },         // Optional field for date of birth
});

module.exports = mongoose.model('User', userSchema);
