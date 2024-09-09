import React from 'react'
import loginLeft from '../assets/loginLeft.jpg'
import googleLogo from '../assets/googlelogo.png';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Shared/firebaseConfig';

function Login() {
    console.log("VITE_FIREBASE_APIKEY", import.meta.env.VITE_FIREBASE_APIKEY);

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider); // Perform Google sign-in
            console.log("User signed in: ", result.user);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

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

                    <button
                        className="w-full p-3 rounded-full border border-gray-300 text-black font-semibold text-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 transition flex items-center justify-center space-x-2"
                        onClick={handleGoogleAuth}
                    >
                        {/* Google Logo */}
                        <img
                            src={googleLogo}
                            alt="Google logo"
                            className="w-7 h-7"

                        />
                        {/* Button Text */}
                        <span>Sign up with Google</span>
                    </button>

                </div>
            </div>
        </div>
    );
}





export default Login