import { Pencil } from 'lucide-react';
import React, { useState } from 'react';
import EducationForm from '../../Form/ProfileForm/EducationForm';

const EducationSeeker = () => {
  const [visible,setVisible]=useState(false)
    return (
        <div className="bg-[#1b152b]  text-white rounded-md p-6 w-full  shadow-md">
     <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
          <h2 className="text-lg font-semibold text-purple-400">Education</h2>
          <Pencil onClick={()=>setVisible(true)} size={20} className="cursor-pointer text-purple-400 hover:text-white" />
        </div>
        {
          visible?
          <EducationForm setVisible={setVisible}/>
          :
          <div className="grid grid-cols-2 gap-y-6 text-lg">
          <InfoRow label="Your Education level" value="Higher Secondary" />
          <InfoRow label="" value="" />
          <InfoRow label="Exam/Degree Title" value="HSC" />
          <InfoRow label="" value="" />
          <InfoRow label="Institution Name" value="Bonarpara Government College" />
          <InfoRow label="" value="" />
          <InfoRow label="Approximate Passing Year" value="2019" />
          <InfoRow label="Current Year" value="4th" />
          <InfoRow label="Are you a CSE/CS student?" value="No" />
        </div>
        }

    
    </div>
    );
};

const InfoRow = ({ label, value }) => {
  
  
    return (
      <div className='space-y-2'>
        <p className="text-gray-400 ">{label}</p>
        <p className="font-semibold">{value}</p>
      </div>
    );
  };

export default EducationSeeker;