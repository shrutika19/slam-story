import { motion } from "framer-motion";

const ActionButtons = ({ onSave, onSubmit }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-6 space-x-6"
        >
            {/* Save Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onSave}
                className="mb-3 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-400 shadow-lg hover:shadow-xl transition-all"
            >
                💾 Save
            </motion.button>

            {/* Submit Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onSubmit}
                className="mb-3 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-green-400 to-teal-400 shadow-lg hover:shadow-xl transition-all"
            >
                🚀 Submit
            </motion.button>
        </motion.div>
    );
};

export default ActionButtons;
