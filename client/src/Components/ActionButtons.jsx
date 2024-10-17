// src/Components/ActionButtons.js
import React from 'react';

const ActionButtons = ({ onSave, onSubmit }) => {
    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={onSave}
                className="bg-white text-black px-4 py-2 rounded mr-4"
            >
                Save
            </button>
            <button
                onClick={onSubmit}
                className="bg-white text-black px-4 py-2 rounded mr-4"
            >
                Submit
            </button>
        </div>
    );
};

export default ActionButtons;
