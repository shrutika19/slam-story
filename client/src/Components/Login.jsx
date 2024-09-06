import React from 'react'
import MySvgIcon from './MySvgIcon'

function Login() {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-full md:w-1/3 bg-white p-8 flex items-center justify-center shadow-lg">
                <div className="flex items-center justify-center">
                    <MySvgIcon className="w-1/2 h-auto" /> {/* Adjust size as needed */}
                </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-gray-200" style={{ width: '2px', height: '100%' }}></div>

            {/* Right Section */}
            <div className="w-full md:w-2/3 bg-white p-8 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Right Section</h1>
                    <p className="mt-4">This is the right section with 70% width.</p>
                </div>
            </div>
        </div>
    )
}

export default Login