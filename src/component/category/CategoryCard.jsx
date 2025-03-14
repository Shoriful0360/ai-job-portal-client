

const CategoryCard = ({item}) => {
    const{icon,img,number,title}=item || {}
    return (
        <div className="group relative  overflow-hidden rounded-lg shadow-md border bg-white">
        {/* Image Section with Hover Effect */}
        <img 
            src={img} 
            alt={title} 
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:translate-x-[-20%]"
        />

        {/* Content Section */}
        <div className="absolute bottom-0 left-0 w-full bg-white pt-10 h-52 transition-transform duration-500 group-hover:translate-x-[100%]">
            {/* Icon Box */}
            <div className="bg-[#26AE61] z-50 w-20 h-20 flex justify-center items-center text-5xl text-white rounded-full shadow-md mx-auto">
                {icon}
            </div>

            {/* Title & Details */}
            <h1 className="text-2xl font-bold text-center mt-3">{title}</h1>
            <p className="text-center text-gray-600 mt-2">{number} Jobs Available</p>
        </div>
    </div>
    );
};

export default CategoryCard;