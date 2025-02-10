import React, { useEffect } from 'react';
import PolaroidPhoto from '../Components/PolaroidPhoto';
import { useParams } from 'react-router-dom';
import { SlamProvider, useSlamContext } from '../Context/SlamContext';
import { motion } from 'framer-motion';

const SlamDetailsComp = () => {
    const { id } = useParams();
    const { getSlamDataById, slamDataById } = useSlamContext();

    useEffect(() => {
        getSlamDataById(id);
    }, [id]);

    return (
        <div className=" flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-5xl h-auto bg-white shadow-2xl rounded-3xl p-3 relative grid grid-rows-[auto,1fr,auto] gap-6"
            >
                {/* Header Section */}
                <div className="grid grid-cols-2 items-center p-4">
                    {/* Left Side - About Me & Details */}
                    <div>
                        <h2 className="text-4xl font-bold text-indigo-700">💖 About Me</h2>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-indigo-100 p-6 mt-4 rounded-xl shadow-lg"
                        >
                            <p className="text-gray-800"><span className="font-semibold">Name:</span> {slamDataById.data?.fullname || 'Shrutika Jaiswal'}</p>
                            <p className="text-gray-800"><span className="font-semibold">Birthdate:</span> {slamDataById.data?.dateOfBirth || 'N/A'}</p>
                            <p className="text-gray-800"><span className="font-semibold">Contact:</span> {slamDataById.data?.contact || '982647562524'}</p>
                        </motion.div>
                    </div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 10 }}
                        transition={{ yoyo: Infinity, duration: 1 }}
                        className="flex justify-end"
                    >
                        <PolaroidPhoto image={slamDataById.data?.image} />
                    </motion.div>
                </div>

                {/* Favorites Section */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl shadow-lg text-white"
                >
                    <h2 className="text-2xl font-semibold text-center">🌸 My Favorites</h2>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                        <p><span className="font-semibold">🍽️ Food:</span> {slamDataById.data?.favFood || 'N/A'}</p>
                        <p><span className="font-semibold">🎬 Movie:</span> {slamDataById.data?.favMovie || 'N/A'}</p>
                        <p><span className="font-semibold">🎶 Song:</span> {slamDataById.data?.favSong || 'N/A'}</p>
                        <p><span className="font-semibold">📺 Web Series:</span> {slamDataById.data?.favWebseries || 'N/A'}</p>
                    </div>
                </motion.div>

                {/* Fun Fact & Memory */}
                <div className="grid grid-cols-2 gap-6">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-indigo-100 p-6 rounded-xl shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-indigo-800">💡 Fun Fact</h2>
                        <p className="text-gray-800 mt-2 italic">"{slamDataById.data?.funfact || 'N/A'}"</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-indigo-100 p-6 rounded-xl shadow-lg"
                    >
                        <h2 className="text-lg font-semibold text-indigo-800">💭 Favorite Memory</h2>
                        <p className="text-gray-800 mt-2 italic">"{slamDataById.data?.memory || 'N/A'}"</p>
                    </motion.div>
                </div>

                {/* Message */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-indigo-600 p-6 rounded-xl shadow-lg text-center text-white font-semibold italic"
                >
                    "{slamDataById.data?.message || 'Stay Positive! 🌟'}"
                </motion.div>
            </motion.div>
        </div>
    );

};

const SlamDetails = () => {
    return (
        <SlamProvider>
            <SlamDetailsComp />
        </SlamProvider>
    );
};

export default SlamDetails;
