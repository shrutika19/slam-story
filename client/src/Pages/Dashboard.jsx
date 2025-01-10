import React from 'react'
import Navbar from '../Components/Navbar'
import CustomCard from '../Components/CustomCard'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className='m-10'>
                <CustomCard />
            </div>
        </>
    )
}

export default Dashboard