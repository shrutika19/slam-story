import React from 'react'
import loginLeft from '../assets/loginLeft.jpg'
import logo from '../assets/logo.png';
import GoogleAuth from './GoogleAuth';


function Login() {
    console.log("VITE_FIREBASE_APIKEY", import.meta.env.VITE_FIREBASE_APIKEY);

    return (
        <div className="flex h-screen">
            <div
                className="w-full md:w-1/3 bg-cover bg-center p-8 flex items-center justify-center shadow-lg"
                style={{ backgroundImage: `url(${loginLeft})` }}
            >
            </div>
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
                        className="w-full p-4 mt-2 mb-6 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your email"
                    />
                    <label className="text-lg font-semibold text-left" style={{ color: '#442DC7' }}>
                        Password
                    </label>

                    <input
                        type="password"
                        className="w-full p-4 mt-2 mb-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your password"
                    />
                    <div className="text-right mb-6">
                        <span className="text-sm font-semibold underline cursor-pointer" style={{ color: '#442DC7' }}>
                            Not registered?
                        </span>
                    </div>


                    <button
                        className="w-full p-4 rounded-full text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-442DC7"
                        style={{ backgroundColor: '#442DC7' }}
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





export default Login