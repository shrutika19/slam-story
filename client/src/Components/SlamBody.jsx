import { motion } from "framer-motion";

const SlamBody = ({ onFieldChange }) => {
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
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" mx-auto bg-white   p-6 grid grid-cols-2 gap-6"
        >
            {/* Left Section */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-indigo-100 p-6 rounded-xl shadow-lg"
            >
                <h2 className="text-2xl font-bold text-indigo-700 mb-4">🌸 My Favorites</h2>
                {fieldList.map((field) => (
                    <div key={field.id} className="mb-4">
                        <label htmlFor={field.id} className="block font-medium text-indigo-800">
                            {field.label}:
                        </label>
                        <input
                            type="text"
                            id={field.id}
                            onChange={(e) => onFieldChange(field.id, e.target.value)}
                            className="border border-indigo-300 p-2 rounded w-full focus:ring-2 focus:ring-indigo-500"
                            placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                    </div>
                ))}
            </motion.div>

            {/* Right Section */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-indigo-100 p-6 rounded-xl shadow-lg"
            >
                <div className="mb-4">
                    <label htmlFor="funfact" className="block font-medium text-indigo-800">💡 Fun Fact About Me:</label>
                    <textarea
                        id="funfact"
                        onChange={(e) => onFieldChange("funfact", e.target.value)}
                        className="border border-indigo-300 p-2 rounded w-full focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        placeholder="Share a fun fact about yourself"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="memory" className="block font-medium text-indigo-800">💭 Funniest Memory Together:</label>
                    <textarea
                        id="memory"
                        onChange={(e) => onFieldChange("memory", e.target.value)}
                        className="border border-indigo-300 p-2 rounded w-full focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        placeholder="Share your funniest memory together"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium text-indigo-800">💌 Message for Me:</label>
                    <textarea
                        id="message"
                        onChange={(e) => onFieldChange("message", e.target.value)}
                        className="border border-indigo-300 p-2 rounded w-full focus:ring-2 focus:ring-indigo-500"
                        rows="4"
                        placeholder="Write a message for me"
                    />
                </div>
            </motion.div>
        </motion.div>
    );

    // return (
    //     <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-blue-100 p-6">
    //         <motion.div
    //             initial={{ opacity: 0, scale: 0.9 }}
    //             animate={{ opacity: 1, scale: 1 }}
    //             transition={{ duration: 0.5 }}
    //             className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl p-6 relative grid grid-cols-2 gap-6"
    //         >
    //             {/* Left Section - Favorites */}
    //             <motion.div
    //                 initial={{ x: -50, opacity: 0 }}
    //                 animate={{ x: 0, opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //                 className="bg-indigo-100 p-6 rounded-xl shadow-lg"
    //             >
    //                 <h2 className="text-2xl font-bold text-indigo-700 mb-4">🌸 My Favorites</h2>
    //                 <div className="grid grid-cols-1 gap-4">
    //                     {fieldList.map((field) => (
    //                         <div key={field.id} className="flex items-center">
    //                             <label htmlFor={field.id} className="font-medium w-1/3 text-gray-700">
    //                                 {field.label}:
    //                             </label>
    //                             <input
    //                                 type="text"
    //                                 id={field.id}
    //                                 onChange={(e) => onFieldChange(field.id, e.target.value)}
    //                                 className="border p-2 rounded-md w-full shadow-sm"
    //                                 placeholder={`Enter ${field.label.toLowerCase()}`}
    //                             />
    //                         </div>
    //                     ))}
    //                 </div>
    //             </motion.div>

    //             {/* Right Section - Additional Inputs */}
    //             <motion.div
    //                 initial={{ x: 50, opacity: 0 }}
    //                 animate={{ x: 0, opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //                 className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg"
    //             >
    //                 <h2 className="text-2xl font-bold text-center">💬 Share Your Thoughts</h2>

    //                 <div className="mt-4">
    //                     <label htmlFor="funFact" className="block font-medium">
    //                         💡 Fun Fact About Me:
    //                     </label>
    //                     <textarea
    //                         id="funfact"
    //                         onChange={(e) => onFieldChange("funfact", e.target.value)}
    //                         className="border p-2 rounded-md w-full text-black mt-2 shadow-sm"
    //                         rows="3"
    //                         placeholder="Share a fun fact about yourself"
    //                     />
    //                 </div>

    //                 <div className="mt-4">
    //                     <label htmlFor="memory" className="block font-medium">
    //                         💭 Funniest Memory Together:
    //                     </label>
    //                     <textarea
    //                         id="memory"
    //                         onChange={(e) => onFieldChange("memory", e.target.value)}
    //                         className="border p-2 rounded-md w-full text-black mt-2 shadow-sm"
    //                         rows="3"
    //                         placeholder="Share your funniest memory"
    //                     />
    //                 </div>

    //                 <div className="mt-4">
    //                     <label htmlFor="message" className="block font-medium">
    //                         📜 Message for Me:
    //                     </label>
    //                     <textarea
    //                         id="message"
    //                         onChange={(e) => onFieldChange("message", e.target.value)}
    //                         className="border p-2 rounded-md w-full text-black mt-2 shadow-sm"
    //                         rows="3"
    //                         placeholder="Write a message"
    //                     />
    //                 </div>
    //             </motion.div>
    //         </motion.div>
    //     </div>
    // );
};

export default SlamBody;
