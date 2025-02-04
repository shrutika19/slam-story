import React, { useState } from 'react'
import SlamHeader from '../Components/SlamHeader'
import SlamBody from '../Components/SlamBody'
import { SlamProvider, useSlamContext } from '../Context/SlamContext';
import ActionButtons from '../Components/ActionButtons';

const SlamPageComp = () => {
    const { postSlamData } = useSlamContext();

    const [formData, setFormData] = useState({
        fullname: "",
        contact: "",
        dateOfBirth: "",
        favColor: "",
        favFood: "",
        favSong: "",
        favMovie: "",
        favWebseries: "",
        favCafe: "",
        favHobby: "",
        funfact: "",
        memory: "",
        message: "",
    });

    //update state for inputs
    const handleFieldChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    }

    //handle spost call on submit
    const handleSubmit = async () => {
        console.log("Submitting Data", formData)
        await postSlamData(formData)
    }

    return (

        <div className="min-h-screen  flex flex-col">
            <SlamHeader onFieldChange={handleFieldChange} />
            <div className="flex-grow">
                <SlamBody onFieldChange={handleFieldChange} />
                <ActionButtons onSave={() => console.log("Save clicked")} onSubmit={handleSubmit} />

            </div>
        </div>
    )
}

const SlamPage = () => {
    return (
        <SlamProvider>
            <SlamPageComp />
        </SlamProvider>
    )
}


export default SlamPage