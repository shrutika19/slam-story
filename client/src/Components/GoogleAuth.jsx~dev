import React from 'react'
import googleLogo from '../assets/googlelogo.png';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Shared/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useSlam } from '../Context/SlamContext';


const GoogleAuth = () => {
    const navigate = useNavigate();
    const { postRegisterGoogleAuth } = useSlam();

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider); // Google sign-in
            const user = result.user;
            const token = await user.getIdToken();  // Get Firebase ID token

            console.log("User signed in: ", user);

            // Call backend to register/login user with the token
            await postRegisterGoogleAuth(user, token);
            navigate('/');  // Redirect on success
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <button
            className="w-full p-3 rounded-full border border-gray-300 text-black font-semibold text-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:bg-gray-100 transition flex items-center justify-center space-x-2"
            onClick={handleGoogleAuth}
        >

            <img
                src={googleLogo}
                alt="Google logo"
                className="w-7 h-7"

            />

            <span>Sign up with Google</span>
        </button>
    )
}

export default GoogleAuth