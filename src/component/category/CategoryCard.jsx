import { Link } from "react-router";
import { motion } from 'framer-motion';

const CategoryCard = ({item,index}) => {
    const{icon,img,number,title}=item || {}
    return (
        <Link to={`/category-job/${title}`}>
        <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 200 - 100, // Random X (-100px to +100px)
              y: Math.random() * 200 - 100, // Random Y
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              transition: {
                delay: 0.1 * index,
                duration: 0.7,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, amount: 0.3 }}

        
        className="group relative  overflow-hidden rounded-lg shadow-xl border-blue-600 border  bg-white">
        {/* Image Section with Hover Effect */}
        <img 
            src={img} 
            alt={title} 
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:translate-x-[-20%]"
        />

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 w-full bg-white pt-10 h-52 transition-transform duration-500 group-hover:translate-x-[100%]">
            {/* Icon Box */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-950 z-50 w-20 h-20 flex justify-center items-center text-5xl text-white rounded-full shadow-md mx-auto">
                {icon}
            </div>

            {/* Title & Details */}
            <h1 className="text-2xl font-bold text-center mt-3">{title}</h1>
            <p className="text-center text-gray-600 mt-2">{number} Jobs Available</p>
        </div>
    </motion.div></Link>
    );
};

export default CategoryCard;