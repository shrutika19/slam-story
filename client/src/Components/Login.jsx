import React, { useState } from 'react';
import loginLeft from '../assets/loginLeft.jpg';
import logo from '../assets/logo.png';
import GoogleAuth from './googleAuth';
import { useNavigate } from 'react-router-dom';
import { SlamProvider, useSlamContext } from '../Context/SlamContext';

function LoginComp() {
    const navigate = useNavigate();
    const { postLoginData } = useSlamContext();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission

        console.log("Submit button");
        console.log("JSON.stringify({ email, password })", formData); // Log formData without empty keys

        postLoginData(formData);

        // navigate('/');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => {
            const newData = {
                ...prevData,
                [name]: value, // Update the specific field in formData
            };
            console.log(newData); // Log newData to see the current state
            return newData;
        });
    };

    return (
        <div className="flex h-screen">
            <div
                className="w-full md:w-1/3 bg-cover bg-center p-8 flex items-center justify-center shadow-lg"
                style={{ backgroundImage: `url(${loginLeft})` }}
            ></div>
            <div className="hidden md:block bg-gray-200" style={{ width: '2px', height: '100%' }}></div>
            <div className="w-full md:w-2/3 bg-white p-8 flex flex-col items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="text-5xl font-bold mb-8 text-center" style={{ color: '#0C0C0C' }}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <label className="text-lg font-semibold text-left" style={{ color: '#442DC7' }}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email" // Ensure this is set
                        className="w-full p-4 mt-2 mb-6 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <label className="text-lg font-semibold text-left" style={{ color: '#442DC7' }}>
                        Password
                    </label>
                    <input
                        type="password"
                        name="password" // Ensure this is set
                        className="w-full p-4 mt-2 mb-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />
                    <div className="text-right mb-6">
                        <span
                            className="text-sm font-semibold underline cursor-pointer"
                            style={{ color: '#442DC7' }}
                            onClick={handleRegisterRedirect}
                        >
                            Not registered?
                        </span>
                    </div>
                    <button
                        className="w-full p-4 rounded-full text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-442DC7"
                        style={{ backgroundColor: '#442DC7' }}
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500">Or, Login With</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
}

const Login = () => {
    return (
        <SlamProvider>
            <LoginComp />
        </SlamProvider>
    );
}

export default Login;
