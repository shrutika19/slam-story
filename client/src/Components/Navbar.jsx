import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { auth } from '../Shared/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaCommentDots, FaChevronDown } from 'react-icons/fa';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    const fetchLoggedInUser = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log("Current user:", user);
                setLoggedInUser(user); // Set the logged-in user state
            } else {
                console.log("No user is signed in");
            }
        });
    };

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigate('/login');
            console.log("Sign out success")
        } catch (error) {
            console.log("Error sign out", error.message)
        }
    }

    const handleProfileClick = () => {
        //navigate('/myprofile');
    };

    useEffect(() => {
        fetchLoggedInUser()
    }, [])

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
                    <button onClick={handleSignOut}>sign out</button>
                </div>
                <div className="flex items-center space-x-4 relative">
                    {/* Icons - Search, Message, Profile, Down Arrow */}

                    {/* Search Icon with Tooltip */}
                    <div className="group relative">
                        <FaSearch
                            className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                        />
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md py-1 px-2 pointer-events-none">
                            Search
                        </div>
                    </div>

                    {/* Message Icon with Tooltip */}
                    <div className="group relative">
                        <FaCommentDots
                            className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                        />
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md py-1 px-2 pointer-events-none">
                            Message
                        </div>
                    </div>

                    {/* Profile Picture with Tooltip */}
                    <div className="group relative">
                        {loggedInUser ? (
                            <img
                                src={loggedInUser.photoURL}
                                alt="Profile"
                                className="h-6 w-6 rounded-full border-2 border-gray-300 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400"
                                onClick={handleProfileClick}
                            />
                        ) : (
                            <img
                                src="path-to-default-profile-picture.jpg"
                                alt="Default Profile"
                                className="h-6 w-6 rounded-full border-2 border-gray-300 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400"
                            />
                        )}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md py-1 px-2 pointer-events-none">
                            My Profile
                        </div>
                    </div>

                    {/* Downward Arrow Icon with Tooltip */}
                    <div className="group relative">
                        <FaChevronDown
                            className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                        />
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md py-1 px-2 pointer-events-none">
                            More
                        </div>
                    </div>
                </div>



                {/* <div className="flex items-center space-x-4">
                    <FaSearch
                        className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                    />
                    <FaCommentDots
                        className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                    />
                    {loggedInUser ? (
                        <img
                            src={loggedInUser.photoURL}
                            alt="Profile"
                            className="h-6 w-6 rounded-full border-2 border-gray-300 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400"
                            onClick={handleProfileClick}
                        />
                    ) : (
                        <img
                            src="path-to-default-profile-picture.jpg"
                            alt="Default Profile"
                            className="h-6 w-6 rounded-full border-2 border-gray-300 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400"
                        />
                    )}
                    <FaChevronDown
                        className="h-5 w-5 text-gray-600 cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent"
                    />
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
