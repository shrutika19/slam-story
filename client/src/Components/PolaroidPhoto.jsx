import React from 'react'

const PolaroidPhoto = ({ image }) => {
    return (
        <div className="relative w-40 h-48 bg-pink-300 rounded-lg shadow-lg p-2 flex flex-col items-center">
            {/* White Frame */}
            <div className="bg-white w-full h-4/5 rounded-t-lg flex items-center justify-center overflow-hidden">
                <img
                    src={image || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Caption */}
            <div className="w-full h-1/5 bg-white rounded-b-lg flex items-center justify-center text-pink-600 font-semibold text-sm">
                Your Photo Here
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1 right-1 text-pink-500 text-lg">💖</div>
            <div className="absolute bottom-2 left-2 text-pink-500 text-lg">💛</div>
        </div>
    )
}

export default PolaroidPhoto