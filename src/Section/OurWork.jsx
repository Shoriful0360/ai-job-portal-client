import pic from '../../public/Photo/what we work pic.avif'
import { MdOutlineDoubleArrow } from "react-icons/md";
const OurWork = () => {
    return (
        <div className='sm:my-10 '>
            <h3 className='text-3xl font-bold text-center my-3'>What we do</h3>
            <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>Our AI-powered job portal offers a smart solution for job seekers, helping them find the right job based on their skills and experience.</p>
            <div className='grid lg:grid-cols-2 my-5 px-1 lg:px-7 gap-10 items-center md:px-7 '>
                <div className='mt-3'>
                    <div className='bg-gray-200 px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li className='text-lg font-bold   text-black '>✅ Personalized Job Recommendations</li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> Our AI algorithm suggests the best job opportunities based on a user's skills, experience, and preferences, making job searching easier and faster.</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li className='text-lg font-bold   text-black '>🚀 Smart Hiring System for Employers</li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> We help recruiters find the most suitable candidates, making the hiring process faster and more efficient.</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li className='text-lg font-bold   text-black '>🌐 Global Network & Remote Work Options</li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> Our platform provides access to both local and international job markets, including remote job opportunities to expand career possibilities.</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li className='text-lg font-bold   text-black '>📊 AI-driven Career Insights & Guidance</li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> Our data analysis tools offer career insights and recommendations, helping users make better career decisions.</p>
                    </div>
                    <div className='bg-gray-200 px-4 py-1 m-3 rounded-xl mt-auto'>
                        <li className='text-lg font-bold   text-black '>🎯 Faster and Smarter Hiring Process</li>
                        <p className='text-sm font-bold   text-gray-600 pl-7'> With our intelligent filtering system, employers can reduce hiring time by 15-30%, ensuring they find the best candidates quickly.</p>
                    </div>
                </div>
                <div className=' px-3 md:px-4 '><img className='rounded-xl' src={pic} alt="" /></div>
            </div>
        </div>
    );
};

export default OurWork;