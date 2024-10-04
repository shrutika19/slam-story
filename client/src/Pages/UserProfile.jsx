import React from 'react';

const UserProfile = () => {
    return (
        <div className="flex justify-center items-start p-8 bg-gray-200 min-h-screen">
            <div className="flex w-[90%] max-w-6xl h-[90vh]">
                {/* Left Section - 35% */}
                <div className="w-[35%] bg-gray-500 shadow-lg rounded-l-lg p-6 flex flex-col justify-between">
                    {/* Left section content (optional) */}
                </div>

                {/* Right Section - 65% */}
                <div className="w-[65%] bg-white shadow-lg rounded-r-lg p-6 flex flex-col">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-black mb-6 text-center">Change Your Profile</h1>

                    <div className="flex items-center space-x-10">
                        {/* Left - Round Image */}
                        <div className="relative">
                            <img
                                src="https://purepng.com/public/uploads/thumbnail//purepng.com-smiling-mickeymickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-glovesnetflix-1701528649382e5sdz.png"
                                alt="Profile"
                                className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-gray-200"
                            />
                        </div>

                        {/* Right - Upload Photo Label and Button */}
                        <div className="flex flex-col space-y-3">
                            <label className="text-xl font-semibold text-gray-700">Profile Picture</label>
                            <button className="px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md shadow hover:bg-indigo-600 hover:text-white transition duration-300">
                                Upload New Photo
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserProfile;
