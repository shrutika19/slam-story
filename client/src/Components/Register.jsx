import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import GoogleAuth from './googleAuth';
import loginLeft from '../assets/loginLeft.jpg'

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Basic validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // You can add registration logic here (Firebase, custom API, etc.)
        console.log('Registration form data:', formData);

        // After successful registration, redirect to login
        navigate('/');
    };

    return (
        <div className="flex h-screen">
            {/* Left Section with Image */}
            <div
                className="w-1/3 bg-cover bg-center p-8 flex items-center justify-center shadow-lg"
                style={{ backgroundImage: `url(${loginLeft})` }}
            >
            </div>

            {/* Right Section - Form */}
            <div className="w-2/3 bg-white p-8 flex flex-col justify-center">
                <div className="max-w-md mx-auto">
                    {/* Logo */}
                    <div className="text-center mb-4">
                        <img src={logo} alt="Logo" className="mx-auto" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleRegister}>
                        {/* First and Last Name */}
                        <div className="flex space-x-4 mb-4">
                            <div className="w-1/2">
                                <label className="text-lg font-semibold" style={{ color: '#442DC7' }}>
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="text-lg font-semibold" style={{ color: '#442DC7' }}>
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="text-lg font-semibold" style={{ color: '#442DC7' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                                placeholder="Email Address"
                                required
                            />
                        </div>

                        {/* Password and Confirm Password */}
                        <div className="flex space-x-4 mb-6">
                            <div className="w-1/2">
                                <label className="text-lg font-semibold" style={{ color: '#442DC7' }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="text-lg font-semibold" style={{ color: '#442DC7' }}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full p-3 mt-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full p-4 rounded-full text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-442DC7"
                            style={{ backgroundColor: '#442DC7' }}
                        >
                            Register
                        </button>

                        {/* Already Registered? Link */}
                        <div className="text-right mt-2">
                            <span className="text-sm font-semibold">
                                Already registered?{' '}
                                <span
                                    className="underline cursor-pointer"
                                    style={{ color: '#442DC7' }}
                                    onClick={() => navigate('/login')}
                                >
                                    Login here
                                </span>
                            </span>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500">Or, Register With</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Google Auth */}
                    <GoogleAuth />
                </div>
            </div>
        </div>
    )
}

export default Register