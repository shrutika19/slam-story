import React from 'react';
import kids from '../assets/kids.png';
import banner from '../assets/banner.png';

const SlamHeader = () => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log(file);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
                {/* Left Section (70%) */}
                <div className="col-span-2 flex flex-col justify-center space-y-8">
                    {/* Top Row - Image & Heading */}
                    <div className="flex items-center">
                        {/* Left Image */}
                        <div className="w-1/3 pt-2">
                            <img
                                src={kids}
                                alt="Illustration"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        {/* "All About Me" Text */}
                        <div className="w-2/3">
                            <h1 className="text-custom-heading text-5xl text-left font-bold ml-6">All About Me</h1>
                        </div>
                    </div>

                    {/* Name, Contact No, and Birthday */}
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Contact No</label>
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Birthday</label>
                            <input
                                type="date"
                                className="w-full p-3 border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section (30%) */}
                <div className="col-span-1 flex flex-col items-center space-y-8">
                    {/* Upload Image Section */}
                    <div className="w-full">
                        <img
                            src={banner}
                            alt="Right Image"
                            className="w-full h-22 object-cover rounded-lg"
                        />
                    </div>
                    {/* Upload Photo */}
                    <div className="w-full">
                        <label
                            htmlFor="upload-photo"
                            className="w-full h-48 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
                        >
                            <span className="text-gray-600">Upload Photo</span>
                            <input
                                id="upload-photo"
                                type="file"
                                className="hidden"
                                onChange={handleFileUpload}
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlamHeader;
