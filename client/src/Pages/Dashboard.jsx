import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import CustomCard from '../Components/CustomCard'
import { SlamProvider, useSlamContext } from '../Context/SlamContext';
import { useNavigate } from 'react-router-dom';

const DashboardComp = () => {
    const { getSlamDataById, slamDataById, getAllSlamsData, allSlams, } = useSlamContext();
    const navigate = useNavigate();


    useEffect(() => {
        // Call the function to fetch data by ID
        const fetchSlamData = async () => {
            // const id = '67449da32e1c684eb84cab3d'; // Replace with the actual ID you want to fetch
            // await getSlamDataById(id); // Fetch the data
            await getAllSlamsData()
        };

        fetchSlamData();
    }, []); // Dependency array ensures this runs only once on mount

    console.log("allslams in page", allSlams)

    const handleCardClick = (id) => {
        navigate(`/slam/${id}`);
    };

    return (
        <>
            <Navbar />
            <div className='m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {allSlams && allSlams.length > 0 ? (
                    allSlams.map((slam) => (
                        <CustomCard
                            key={slam._id}
                            image={slam.image}
                            name={slam.fullname}
                            contact={slam.contact}
                            birthdate={
                                slam.dateOfBirth
                                    ? new Date(slam.dateOfBirth).toLocaleDateString()
                                    : "N/A"
                            }
                            onClick={() => handleCardClick(slam._id)} // Pass the ID properly
                        />
                    ))
                ) : (
                    <p>No slams found. Please check your data or try again later.</p>
                )}
            </div>
        </>
    );

}

const Dashboard = () => {
    return (
        <SlamProvider>
            <DashboardComp />
        </SlamProvider>
    )
}

export default Dashboard