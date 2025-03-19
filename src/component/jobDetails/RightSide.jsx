import React from 'react';
import { IoTimeSharp } from 'react-icons/io5';

const RightSide = () => {
    return (
        <div>
            <div className='border  border-gray-200 rounded-md px-4'>
                <h1 className='flex items-center text-3xl gap-2 font-bold py-4 border-b border-gray-200'><IoTimeSharp className='text-[#26AE61] text-5xl ' /> Openning Hours</h1>
            
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Sunday</span> <span>9 AM - 5 PM</span></h1>
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Moday</span> <span>9 AM - 5 PM</span></h1>
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Tuesday</span> <span>9 AM - 5 PM</span></h1>
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Wednesday</span> <span>9 AM - 5 PM</span></h1>
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Thursday</span> <span>9 AM - 3 PM</span></h1>
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold border-dashed border-b border-b-gray-200 py-2'><span>Friday</span> <span>closed</span></h1>
            
              <h1 className='flex justify-between text-[#707f8c] text-xl font-semibold  py-2'><span>Saturday</span> <span>Closed</span></h1>
            </div>
            {/* gallery section */}
            <div className='grid md:grid-cols-2 gap-2 mt-10'>
                <img src="https://st3.depositphotos.com/1022135/33232/i/450/depositphotos_332320900-stock-photo-senior-businesswoman-young-business-people.jpg" alt="" className='h-56 object-center w-full rounded-md object-cover'  />
                <img src="https://img.freepik.com/premium-photo/creative-business-team-business-team-meeting-office_425904-7853.jpg?semt=ais_hybrid" alt="" className='h-56 w-full  object-center rounded-md object-cover' />
                <img src="https://cdn.prod.website-files.com/66a08e07fa6352714fc1d6da/66a0ae222bacd723bca117f8_office-space-working-with-computers-office-equipment-3d-rendering-1-scaled.webp" alt="" className='h-56 object-center w-full  rounded-md object-cover'  />
                <img src="https://www.bubt.edu.bd/assets/frontend/images/IMG-20230809-WA0048.jpg" alt="" className='h-56 object-center rounded-md object-cover w-full '  />
            </div>
        </div>
    );
};

export default RightSide;