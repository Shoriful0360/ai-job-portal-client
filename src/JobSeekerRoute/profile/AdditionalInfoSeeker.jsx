import React, { useState } from 'react';
import { Pencil } from "lucide-react";
import AdditionalInfoForm from '../../Form/ProfileForm/AdditionalInfoForm';
const AdditionalInfoSeeker = () => {
  const[visible,setVisible]=useState(false)
    return (
        <div className="bg-[#1b152b] text-white rounded-md p-6 w-full mshadow-md">
     <div className="flex justify-between items-center border-b border-dashed pb-2 mb-4">
          <h3 className="text-lg font-bold text-purple-400">My Profile</h3>
          <button onClick={()=>setVisible(!visible)} className="text-purple-300 hover:text-purple-500">
            ✏️ Edit
          </button>
        </div>

        {
          visible?<>
          <AdditionalInfoForm/>
          </>
          :
          <>
              <div className="grid grid-cols-2 gap-y-6 text-lg">
          <InfoRow label="Your Gender" value="Male" />
          <InfoRow label="Age Range" value="20-25" />
          <InfoRow label="Primary Device Type" value="Computer" />
          <InfoRow label="Internet Type" value="Mobile" />
          <InfoRow label="Years Of Experience" value="0" />
          <InfoRow label="Employment Role" value="None" />
          <InfoRow label="Area Type" value="Village" />
        </div>
          </>
        }
  
    
      </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div>
      <p className="text-gray-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );

export default AdditionalInfoSeeker;