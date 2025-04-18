import React, { useState } from 'react';
import { Pencil } from "lucide-react";
import AddressForm from '../../Form/ProfileForm/AddressForm';
const AddressSeeker = () => {
  const[visible,setVisible]=useState(false)
    return (
        <div className="bg-[#1b152b] text-white rounded-md p-6 w-full shadow-md">
        <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
          <h2 className="text-lg font-semibold text-purple-400">Address</h2>
          <Pencil onClick={()=>setVisible(true)} size={20} className="cursor-pointer text-purple-400 hover:text-white" />
        </div>

        {visible?
        <AddressForm setVisible={setVisible}/>
        :
        <>
       {/* Present Address */}
       <div className="mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-4">Present Address</h3>
          <div className="grid grid-cols-2 gap-y-4 text-lg">
            <InfoRow label="Your Country" value="Bangladesh" />
            <InfoRow label="District" value="Gaibandha" />
            <InfoRow label="Street Address" value="Bonarpara Railway Station" />
          </div>
        </div>
  
        {/* Permanent Address */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg mb-4">Permanent Address</h3>
          <div className="grid grid-cols-2 gap-y-4 text-lg">
            <InfoRow label="Your Country" value="Bangladesh" />
            <InfoRow label="District" value="Gaibandha" />
            <InfoRow label="Street Address" value="Bonarpara Railway Station" />
          </div>
        </div>
        </>
        
        
      }
  
       
      </div>
    );
};
const InfoRow = ({ label, value }) => (
    <div className='space-y-2'>
      <p className="text-gray-400">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );

export default AddressSeeker;