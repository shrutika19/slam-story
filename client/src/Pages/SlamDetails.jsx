import React from 'react'
import PolaroidPhoto from '../Components/PolaroidPhoto';

const SlamDetails = ({ slam }) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-pink-200">
            <div className="w-full max-w-4xl h-full max-h-[90vh] bg-pink-100 shadow-lg rounded-lg p-6 relative grid grid-rows-[auto,1fr,auto] gap-4">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 text-pink-500 text-xl">🌸</div>
                <div className="absolute top-4 left-4 text-pink-500 text-xl">🌈</div>

                {/* Header Section */}
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-pink-800">💖 About Me</h2>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-2 gap-6">
                    {/* Left - Personal Details */}
                    <div className="bg-white p-4 rounded-lg shadow-md border border-pink-300">
                        <p className="text-gray-800"><span className="font-semibold">Name:</span> {slam?.fullname || 'Shrutika Jaiswal'}</p>
                        <p className="text-gray-800"><span className="font-semibold">Birthdate:</span>
                            {slam?.dateOfBirth ? new Date(parseInt(slam?.dateOfBirth.$date.$numberLong)).toLocaleDateString() : "N/A"}
                        </p>
                        <p className="text-gray-800"><span className="font-semibold">Contact:</span> {slam?.contact || '982647562524'}</p>
                    </div>

                    {/* Right - Polaroid Photo */}
                    <div className="flex items-center justify-center">
                        <PolaroidPhoto image={slam?.image} />
                    </div>
                </div>

                {/* Favorites Section */}
                <div className="bg-pink-300 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-white text-center">🌸 My Favorites</h2>
                    <div className="grid grid-cols-2 gap-3 text-white mt-2">
                        <p><span className="font-semibold">🍽️ Food:</span> {slam?.favFood || "N/A"}</p>
                        <p><span className="font-semibold">🎬 Movie:</span> {slam?.favMovie || "N/A"}</p>
                        <p><span className="font-semibold">🎶 Song:</span> {slam?.favSong || "N/A"}</p>
                        <p><span className="font-semibold">📺 Web Series:</span> {slam?.favWebseries || "N/A"}</p>
                        <p><span className="font-semibold">☕ Café:</span> {slam?.favCafe || "N/A"}</p>
                        <p><span className="font-semibold">📚 Hobby:</span> {slam?.favHobby || "N/A"}</p>
                    </div>
                </div>

                {/* Fun Fact & Memory */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md border border-pink-300">
                        <h2 className="text-lg font-semibold text-pink-800">💡 Fun Fact</h2>
                        <p className="text-gray-800 mt-2 italic">"{slam?.funfact || "N/A"}"</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md border border-pink-300">
                        <h2 className="text-lg font-semibold text-pink-800">💭 Favorite Memory</h2>
                        <p className="text-gray-800 mt-2 italic">"{slam?.memory || "N/A"}"</p>
                    </div>
                </div>

                {/* Message */}
                <div className="bg-pink-400 p-4 rounded-lg shadow-md text-center text-white font-semibold italic">
                    "{slam?.message || "Stay Positive! 🌟"}"
                </div>
            </div>
        </div>
    );
}

export default SlamDetails