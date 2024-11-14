import React, { createContext, useContext, useState } from "react";

const SlamContext = createContext();

export function useSlam() {
    return useContext(SlamContext)
}

export const SlamProvider = ({ children }) => {
    const SlamStoryApi = import.meta.env.VITE_SLAM_STORY_API

    const postRegistrationData = async (data) => {
        console.log("postRegistrationData", data.email)
        try {
            const response = await fetch(`${SlamStoryApi}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    password: data.password,
                }),
            });

            const Resdata = await response.json();
            console.log("Resdata")

            if (response.ok) {
                console.log('Registration successful');
            } else {
                console.log('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            console.log('An error occurred. Please try again later.');

        }
    }

    const postLoginData = async (data) => {
        console.log("LoginData", data.email);
        try {
            const response = await fetch(`${SlamStoryApi}/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            const responseData = await response.json();

            if (response.ok) {
                localStorage.setItem('token', responseData.token);
                console.log('Login successful');
                return responseData;
            } else {
                const errorMessage = responseData.message || 'Login failed. Please check your credentials.';
                console.log(errorMessage);
                throw new Error(errorMessage); // Throw error to be caught in the calling function
            }
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // Re-throw the error for further handling
        }
    };


    const postRegisterGoogleAuth = async (user, token) => {
        try {
            const response = await fetch(`${SlamStoryApi}/api/auth/google-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  // Send token for verification
                },
                body: JSON.stringify({
                    firstname: user.displayName.split(' ')[0],
                    lastname: user.displayName.split(' ')[1] || '',
                    email: user.email,
                }),
            });

            if (response.ok) {
                console.log('Google registration successful');
            } else {
                console.error('Google registration failed');
            }
        } catch (error) {
            console.error("Error during Google registration:", error);
        }
    };

    return (
        <SlamContext.Provider
            value={{
                postRegistrationData,
                postLoginData
            }}
        >
            {children}
        </SlamContext.Provider>
    )
}

export const useSlamContext = () => {
    return useContext(SlamContext)
}

