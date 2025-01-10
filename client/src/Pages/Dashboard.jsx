import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import CustomCard from '../Components/CustomCard'
import { SlamProvider, useSlamContext } from '../Context/SlamContext';

const DashboardComp = () => {
    const { getSlamDataById, slamDataById } = useSlamContext();

    useEffect(() => {
        // Call the function to fetch data by ID
        const fetchSlamData = async () => {
            const id = '67449da32e1c684eb84cab3d'; // Replace with the actual ID you want to fetch
            await getSlamDataById(id); // Fetch the data
        };

        fetchSlamData();
    }, []); // Dependency array ensures this runs only once on mount

    return (
        <>
            <Navbar />
            <div className='m-10'>
                <CustomCard />
            </div>
        </>
    )
}

const Dashboard = () => {
    return (
        <SlamProvider>
            <DashboardComp />
        </SlamProvider>
    )
}

export default Dashboard