import React, { useState } from 'react';
import { Pencil } from "lucide-react";
import AdditionalInfoForm from '../../Form/ProfileForm/AdditionalInfoForm';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
const AdditionalInfoSeeker = () => {
  const[visible,setVisible]=useState(false)
  const{role,isLoading,refetch}=useRole()

  if(isLoading) return <LoadingSpinner/>
  const{ageRange,areaType,deviceType,experience,gender,internetType,employmentRole,about_company,achievement,company_type,founder_year,headquarter,size}=role?.additionalInfo || {}
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
                {/* employer Info */}
                {role?.role==="Employer" &&
                <>
                <InfoRow label="Industry" value={company_type?company_type:"None"} />
                <InfoRow label="Company Size" value={size?size:"None"} />
                <InfoRow label="Founder Year" value={founder_year?founder_year:"None"} />
                <InfoRow label="About Company" value={about_company?about_company:"None"} />
                <InfoRow label="Headquarters Location" value={headquarter?headquarter:"None"} />
                <InfoRow label="Achievements" value={achievement?achievement:"None"} />
                </>
                }
                
                {/* jobseeker Info */}
                {role?.role==="Job Seeker" &&
                <>
                 <InfoRow label="Your Gender" value={gender?gender:"None"} />
          <InfoRow label="Age Range" value={ageRange?ageRange:"None"}/>
          <InfoRow label="Primary Device Type" value={deviceType?deviceType:"None"} />
          <InfoRow label="Internet Type" value={internetType?internetType:"None"} />
          <InfoRow label="Years Of Experience" value={experience?experience:"None"} />
          <InfoRow label="Employment Role" value={employmentRole?employmentRole:"None"} />
          <InfoRow label="Area Type" value={areaType?areaType:"None"} />
                </>
                }
         
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