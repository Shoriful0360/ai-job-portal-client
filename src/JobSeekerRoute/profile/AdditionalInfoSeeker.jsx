import React, { useState } from 'react';
import { Pencil } from "lucide-react";
import AdditionalInfoForm from '../../Form/ProfileForm/AdditionalInfoForm';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
const AdditionalInfoSeeker = () => {
  const[visible,setVisible]=useState(false)
  const{role,isLoading,refetch}=useRole()

  if(isLoading) return <LoadingSpinner/>
  const{ageRange,areaType,deviceType,experience,gender,internetType,employmentRole}=role?.additionalInfo || {}
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
          <AdditionalInfoForm setVisible={setVisible} refetch={refetch}/>
          </>
          :
          <>
              <div className="grid grid-cols-2 gap-y-6 text-lg">
          <InfoRow label="Your Gender" value={gender} />
          <InfoRow label="Age Range" value={ageRange}/>
          <InfoRow label="Primary Device Type" value={deviceType} />
          <InfoRow label="Internet Type" value={internetType} />
          <InfoRow label="Years Of Experience" value={experience} />
          <InfoRow label="Employment Role" value={employmentRole} />
          <InfoRow label="Area Type" value={areaType} />
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