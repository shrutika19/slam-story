import React, { useState } from 'react';
import { SlamProvider, useSlamContext } from '../Context/SlamContext';

const UserProfileComp = () => {
    const [uploadedImage, setUploadedImage] = useState(null); // State to store uploaded image URL

    const { postProfileUpdate } = useSlamContext();

    // Grouped state for form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        dob: ''
    });

    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the uploaded file
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result); // Set the image URL to state
            };
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value // Dynamically update the corresponding field in formData
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log(formData); // Log all form data to the console
        try {
            const responseData = await postProfileUpdate(formData)
            if (responseData) {
                alert('Success')
            }
        } catch (error) {
            console.log("Update failed", error.message)
        }
    };

    return (
        <div className="flex justify-center items-start p-8 bg-gray-200 min-h-screen">
            <div className="flex w-[90%] max-w-6xl h-[90vh]">
                {/* Left Section - 35% */}
                <div className="w-[35%] shadow-lg rounded-l-lg p-6 flex flex-col justify-between relative">
                    {/* Left section content with the uploaded image */}
                    <img
                        src={uploadedImage || "https://purepng.com/public/uploads/thumbnail//purepng.com-smiling-mickeymickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-glovesnetflix-1701528649382e5sdz.png"} // Default image if no upload
                        alt="Profile"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-l-lg opacity-50" // Adjust opacity here
                    />
                </div>

                {/* Right Section - 65% */}
                <div className="w-[65%] bg-white shadow-lg rounded-r-lg p-6 flex flex-col">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-black mb-6 text-center">Change Your Profile</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="flex items-center space-x-10">
                            {/* Left - Round Image */}
                            <div className="relative">
                                <img
                                    src={uploadedImage || "https://purepng.com/public/uploads/thumbnail//purepng.com-smiling-mickeymickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-glovesnetflix-1701528649382e5sdz.png"} // Default image if no upload
                                    alt="Profile"
                                    className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-gray-200"
                                />
                            </div>

                            {/* Right - Upload Photo Label and Button */}
                            <div className="flex flex-col space-y-6">
                                <label className="text-xl font-semibold text-gray-700">Profile Picture</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload} // Call the function on change
                                    className="hidden" // Hide the default file input
                                    id="file-upload"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer px-6 py-2 border border-indigo-600 text-indigo-600 font-medium rounded-md shadow hover:bg-indigo-600 hover:text-white transition duration-300"
                                >
                                    Upload New Photo
                                </label>
                            </div>
                        </div>

                        {/* First Name and Last Name in the same row */}
                        <div className="flex space-x-6 mt-6">
                            {/* First Name */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-lg font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange} // Dynamically update form data
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>

                            {/* Last Name */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-lg font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange} // Dynamically update form data
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email, Contact No, and DOB in the same row */}
                        <div className="flex space-x-6 mt-6">
                            {/* Email Address */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-lg font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange} // Dynamically update form data
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>

                            {/* Contact Number */}
                            <div className="flex-1 flex flex-col">
                                <label className="text-lg font-medium text-gray-700">Contact No.</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange} // Dynamically update form data
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>
                        </div>

                        {/* Date of Birth Field */}
                        <div className="mt-6">
                            <label className="text-lg font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange} // Dynamically update form data
                                className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm w-full focus:outline-none focus:ring focus:ring-indigo-200"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-1 bg-indigo-600  text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


const UserProfile = () => {
    return (
        <SlamProvider>
            <UserProfileComp />
        </SlamProvider>
    )
}
export default UserProfile;
