import React, { useState } from 'react';
import { Pencil } from "lucide-react";
import AddressForm from '../../Form/ProfileForm/AddressForm';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
const AddressSeeker = () => {
  const[visible,setVisible]=useState(false)
  const{role,isLoading,refetch}=useRole()
  if(isLoading) return <LoadingSpinner/>
  const{permanentAddress,presentAddress}= role || {}

    return (
        <div className="bg-[#1b152b] text-white rounded-md p-6 w-full shadow-md">
        <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
          <h2 className="text-lg font-semibold text-purple-400">Address</h2>
          <Pencil onClick={()=>setVisible(true)} size={20} className="cursor-pointer text-purple-400 hover:text-white" />
        </div>

        {visible?
        <AddressForm setVisible={setVisible} refetch={refetch}/>
        :
        <>
       {/* Present Address */}
       <div className="mb-6">
          <h3 className="text-orange-400 font-semibold text-lg mb-4">Present Address</h3>
          <div className="grid grid-cols-2 gap-y-4 text-lg">
            <InfoRow label="Country" value={presentAddress?presentAddress?.country:"None"} />
            <InfoRow label="District" value={presentAddress?presentAddress?.district :"None"} />
            <InfoRow label="Street Address" value={presentAddress?presentAddress?.street: "None"} />
          </div>
        </div>
  
        {/* Permanent Address */}
        <div>
          <h3 className="text-orange-400 font-semibold text-lg mb-4">Permanent Address</h3>
          <div className="grid grid-cols-2 gap-y-4 text-lg">
            <InfoRow label="Country" value={permanentAddress?permanentAddress?.country:"None"} />
            <InfoRow label="District"  value={permanentAddress?permanentAddress?.district: "None"}/>
            <InfoRow label="Street Address" value={permanentAddress?permanentAddress?.street: "None"}  />
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