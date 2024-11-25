import React, { useState } from 'react';

const SlamBody = ({ onFieldChange }) => {

    // List of fields with their labels
    const fieldList = [
        { id: 'favColor', label: 'Color' },
        { id: 'favFood', label: 'Food' },
        { id: 'favSong', label: 'Song' },
        { id: 'favMovie', label: 'Movie' },
        { id: 'favWebseries', label: 'Web Series' },
        { id: 'favCafe', label: 'Cafe/Restaurant' },
        { id: 'favHobby', label: 'Hobby' },
    ];

    return (
        <>
            <div className="flex h-full max-w-6xl mx-auto p-4">
                {/* Left Section (60%) */}
                <div className="w-3/5 p-4 shadow-md">
                    <h2 className="text-2xl font-bold mb-4">My Favorites</h2>

                    {/* Render labels and inputs */}
                    {fieldList.map((field) => (
                        <div key={field.id} className="flex items-center mb-4">
                            <label htmlFor={field.id} className="w-1/3 font-medium mr-4">
                                {field.label}:
                            </label>
                            <input
                                type="text"
                                id={field.id}
                                onChange={(e) => onFieldChange(field.id, e.target.value)}
                                className="border p-2 rounded w-full"
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Right Section (40%) */}
                <div className="w-2/5 p-4 shadow-md">
                    {/* Top Section */}
                    <div className="mb-4">
                        <label htmlFor="funFact" className="block font-medium mb-2">
                            Fun Fact About Me:
                        </label>
                        <textarea
                            id="funfact"
                            onChange={(e) => onFieldChange("funfact", e.target.value)}
                            className="border p-2 rounded w-full"
                            rows="4"
                            placeholder="Share a fun fact about yourself"
                        />
                    </div>

                    {/* Middle Section */}
                    <div className="mb-4">
                        <label htmlFor="funniestMemory" className="block font-medium mb-2">
                            Funniest Memory Together:
                        </label>
                        <textarea
                            id="memory"
                            onChange={(e) => onFieldChange("memory", e.target.value)}
                            className="border p-2 rounded w-full"
                            rows="4"
                            placeholder="Share your funniest memory together"
                        />
                    </div>

                    {/* Bottom Section */}
                    <div>
                        <label htmlFor="messageForMe" className="block font-medium mb-2">
                            Message for Me:
                        </label>
                        <textarea
                            id="message"
                            onChange={(e) => onFieldChange("message", e.target.value)}
                            className="border p-2 rounded w-full"
                            rows="4"
                            placeholder="Write a message for me"
                        />
                    </div>


                </div>


            </div>
        </>

    );
};

export default SlamBody;
