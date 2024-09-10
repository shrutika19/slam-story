import React from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <nav className="bg-white py-6">
            <div className="container mx-auto flex justify-between items-center max-w-full px-4">

                {/* Left side - Logo */}
                <div className="text-black text-xl font-bold">
                    <img src={logo} alt="Project Logo" className="h-12 w-auto cursor-pointer" />
                </div>

                {/* Middle - Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    <a href="#home" className="text-black font-bold hover:text-gray-500">Create Slam</a>
                    <a href="#about" className="text-black font-bold hover:text-gray-500">About</a>
                    <a href="#contact" className="text-black font-bold hover:text-gray-500">Contact</a>
                </div>

                {/* Right side - Profile Picture */}
                <div>
                    <img
                        src="/path-to-profile-picture.jpg"
                        alt="Profile"
                        className="h-12 w-12 rounded-full border-2 border-gray-300"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;