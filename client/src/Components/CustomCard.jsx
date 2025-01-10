import React from 'react'

const CustomCard = ({ image, name, contact, birthdate }) => {
    return (
        <div className='flex items-center bg-white shadow-lg rounded-lg p-4 max-w-sm'>
            {/* Left Section - Image */}
            <div className='flex-shrink-0'>
                <img
                    src={image || 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'}
                    alt='Profile'
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                />
            </div>

            {/* Right Section - Details */}
            <div className='ml-4'>
                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-800">{name || "John Doe"}</h2>
                {/* Contact */}
                <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Contact:</span> {contact || "N/A"}
                </p>
                {/* Birthdate */}
                <p className="text-sm text-gray-600 mt-1">
                    <span className="font-medium">Birthdate:</span> {birthdate || "N/A"}
                </p>
            </div>
        </div>
    )
}

export default CustomCard