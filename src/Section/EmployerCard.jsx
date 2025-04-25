import { FaLocationDot } from "react-icons/fa6";
import { MdCategory } from "react-icons/md";
import { motion } from 'framer-motion';
const EmployerCard = ({ employer, index }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center justify-between border-2 my-2 p-5 rounded-lg">
            <div className="flex items-center gap-5">
                <img className="rounded-full h-12 w-12 sm:w-20 sm:h-20 object-cover" src={employer.photoUrl} alt="" />
                <div className="">
                    <p className="text-sm sm:text-2xl font-bold text-gray-700 ">{employer.companyName}</p>
                    <div className="sm:flex items-center gap-9 my-2 justify-between sm:mt-8">
                        {employer?.presentAddress?.country &&
                            <p className="text-xs sm:text-lg font-semibold text-gray-700 flex gap-2 items-center"><span><FaLocationDot /></span>{employer?.presentAddress?.country}</p>}
                        <p className="text-xs sm:text-lg font-semibold text-gray-700 flex gap-2 items-center"><span><MdCategory /></span>company_type</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="text-xs font-semibold sm:text-sm sm:font-bold"> Available Jobs - {employer.jobCount}</button>
            </div>
        </motion.div>
    );
};

export default EmployerCard;