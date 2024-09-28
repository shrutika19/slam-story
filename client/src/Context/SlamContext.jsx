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
                // Success: Navigate or show success message
                console.log('Registration successful');
                //navigate('/login'); // Redirect to login or another page
            } else {
                // Error: Show error message
                console.log('Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            console.log('An error occurred. Please try again later.');

        }
    }

    return (
        <SlamContext.Provider
            value={{
                postRegistrationData
            }}
        >
            {children}
        </SlamContext.Provider>
    )
}

export const useSlamContext = () => {
    return useContext(SlamContext)
}

