import React from 'react'
import loginLeft from '../assets/loginLeft.jpg'
function Login() {
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
                    <h1 className="text-5xl font-bold mb-8 text-center" style={{ color: '#0C0C0C' }}>
                        SlamStory
                    </h1>

                    {/* Email Label */}
                    <label className="text-lg font-semibold text-left" style={{ color: '#442DC7' }}>
                        Email
                    </label>
                    {/* Email Input */}
                    <input
                        type="email"
                        className="w-full p-4 mt-2 mb-6 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your email"
                    />

                    {/* Password Label */}
                    <label className="text-lg font-semibold text-left" style={{ color: '#442DC7' }}>
                        Password
                    </label>
                    {/* Password Input */}
                    <input
                        type="password"
                        className="w-full p-4 mt-2 mb-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-442DC7"
                        placeholder="Enter your password"
                    />

                    {/* "Not Registered?" Label */}
                    <div className="text-right mb-6">
                        <span className="text-sm font-semibold underline cursor-pointer" style={{ color: '#442DC7' }}>
                            Not registered?
                        </span>
                    </div>

                    {/* Login Button */}
                    <button
                        className="w-full p-4 rounded-full text-white font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-442DC7"
                        style={{ backgroundColor: '#442DC7' }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}





export default Login