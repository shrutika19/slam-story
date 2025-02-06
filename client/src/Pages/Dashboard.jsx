import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import CustomCard from "../Components/CustomCard";
import { SlamProvider, useSlamContext } from "../Context/SlamContext";
import { useNavigate } from "react-router-dom";

const DashboardComp = () => {
    const { getAllSlamsData, allSlams } = useSlamContext();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSlamData = async () => {
            await getAllSlamsData();
        };
        fetchSlamData();
    }, []);

    console.log("allslams in page", allSlams);

    const handleCardClick = (id) => {
        navigate(`/slam/${id}`);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto p-6">


                {/* Slam Cards Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {allSlams && allSlams.length > 0 ? (
                        allSlams.map((slam) => (
                            <motion.div
                                key={slam._id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <CustomCard
                                    image={slam.image}
                                    name={slam.fullname}
                                    contact={slam.contact}
                                    birthdate={
                                        slam.dateOfBirth
                                            ? new Date(slam.dateOfBirth).toLocaleDateString()
                                            : "N/A"
                                    }
                                    onClick={() => handleCardClick(slam._id)}
                                    cardStyle="h-[280px] w-[230px] shadow-lg bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 flex flex-col justify-between"
                                    imageStyle="h-36 w-full object-cover rounded-md"
                                    nameStyle="text-lg font-semibold text-gray-900 text-center mt-2"
                                    contactStyle="text-sm text-gray-600 text-center"
                                    birthdateStyle="text-xs text-gray-500 text-center"
                                />
                            </motion.div>
                        ))
                    ) : (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-lg text-gray-500 col-span-full"
                        >
                            🚀 No slams found. Please check your data or try again later.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </>
    );
};

const Dashboard = () => {
    return (
        <SlamProvider>
            <DashboardComp />
        </SlamProvider>
    );
};

export default Dashboard;
