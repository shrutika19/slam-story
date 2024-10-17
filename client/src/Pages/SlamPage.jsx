import React from 'react'
import SlamHeader from '../Components/SlamHeader'
import SlamBody from '../Components/SlamBody'

const SlamPage = () => {
    return (
        // <div className="min-h-screen  bg-custom-bg ">
        //     <SlamHeader />
        //     <SlamBody />
        // </div>

        <div className="min-h-screen bg-custom-bg flex flex-col">
            <SlamHeader />
            <div className="flex-grow">
                <SlamBody />
            </div>
        </div>
    )
}

export default SlamPage