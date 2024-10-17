import React, { useState } from 'react';
import ActionButtons from './ActionButtons';

const SlamBody = () => {
    // State for each input field
    const [fields, setFields] = useState({
        color: '',
        food: '',
        song: '',
        movie: '',
        webSeries: '',
        cafeRestaurant: '',
        hobby: '',
    });

    // State for additional text areas
    const [textAreas, setTextAreas] = useState({
        funFact: '',
        funniestMemory: '',
        messageForMe: '', // Added state for the new text area
    });

    // Handler for input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFields((prevFields) => ({
            ...prevFields,
            [id]: value,
        }));
    };

    // Handler for text area changes
    const handleTextAreaChange = (e) => {
        const { id, value } = e.target;
        setTextAreas((prevTextAreas) => ({
            ...prevTextAreas,
            [id]: value,
        }));
    };

    // List of fields with their labels
    const fieldList = [
        { id: 'color', label: 'Color' },
        { id: 'food', label: 'Food' },
        { id: 'song', label: 'Song' },
        { id: 'movie', label: 'Movie' },
        { id: 'webSeries', label: 'Web Series' },
        { id: 'cafeRestaurant', label: 'Cafe/Restaurant' },
        { id: 'hobby', label: 'Hobby' },
    ];

    const handleSave = () => {
        console.log('Saved Data:', { ...fields, ...textAreas });
    };

    const handleSubmit = () => {
        console.log('Submitted Data:', { ...fields, ...textAreas });
    };

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
                                value={fields[field.id]}
                                onChange={handleInputChange}
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
                            id="funFact"
                            value={textAreas.funFact}
                            onChange={handleTextAreaChange}
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
                            id="funniestMemory"
                            value={textAreas.funniestMemory}
                            onChange={handleTextAreaChange}
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
                            id="messageForMe"
                            value={textAreas.messageForMe}
                            onChange={handleTextAreaChange}
                            className="border p-2 rounded w-full"
                            rows="4"
                            placeholder="Write a message for me"
                        />
                    </div>


                </div>


            </div>
            <ActionButtons onSave={handleSave} onSubmit={handleSubmit} />
        </>

    );
};

export default SlamBody;
