import React from 'react';
import { Pencil } from "lucide-react";
const AdditionalInfoSeeker = () => {
    return (
        <div className="bg-[#1b152b] text-white rounded-md p-6 w-full mshadow-md">
        <div className="flex justify-between bg-[#19192b] items-center mb-6">
          <h2 className="text-lg font-semibold">Additional Info</h2>
          <Pencil size={18} className="cursor-pointer text-gray-400 hover:text-white" />
        </div>
  
        <div className="grid grid-cols-2 gap-y-6 text-lg">
          <InfoRow label="Your Gender" value="Male" />
          <InfoRow label="Age Range" value="20-25" />
          <InfoRow label="Primary Device Type" value="Computer" />
          <InfoRow label="Internet Type" value="Mobile" />
          <InfoRow label="Years Of Experience" value="0" />
          <InfoRow label="Employment Role" value="None" />
          <InfoRow label="Area Type" value="Village" />
        </div>
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