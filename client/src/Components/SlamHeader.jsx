import React from 'react';
import kids from '../assets/kids.png';
import banner from '../assets/banner.png';
import { motion } from "framer-motion";


const SlamHeader = ({ onFieldChange }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log(file);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full  mx-auto p-6 bg-gradient-to-r from-blue-300 to-purple-300  "
        >
            <div className="grid grid-cols-3 gap-8 items-center">

                {/* Left Section (70%) */}
                <div className="col-span-2 flex flex-col justify-center space-y-8">

                    {/* Title and Illustration */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center bg-white p-4 rounded-xl shadow-lg"
                    >
                        <div className="w-1/3">
                            <img
                                src={kids}
                                alt="Illustration"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <h1 className="text-indigo-700 text-5xl font-bold text-center w-2/3">
                            ✨ All About Me
                        </h1>
                    </motion.div>

                    {/* Name, Contact, Birthday */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-lg"
                    >
                        <div>
                            <label className="block text-indigo-800 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-400"
                                onChange={(e) => onFieldChange("fullname", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-indigo-800 font-bold mb-2">Contact No</label>
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-400"
                                onChange={(e) => onFieldChange("contact", e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-indigo-800 font-bold mb-2">Birthday</label>
                            <input
                                type="date"
                                className="w-full p-3 border border-indigo-300 rounded-md focus:ring-2 focus:ring-indigo-400"
                                onChange={(e) => onFieldChange("dateOfBirth", e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Right Section (30%) */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 flex flex-col items-center space-y-8"
                >
                    {/* Display Banner Image */}
                    <div className="w-full">
                        <img
                            src={banner}
                            alt="Right Image"
                            className="w-full h-22 object-cover rounded-lg "
                        // className="w-full h-22 object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Upload Photo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <label
                            htmlFor="upload-photo"
                            className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 rounded-lg cursor-pointer bg-indigo-100 hover:bg-indigo-200 shadow-lg"
                        >
                            <span className="text-indigo-700 font-semibold">📸 Upload Photo</span>
                            <input
                                id="upload-photo"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SlamHeader;
