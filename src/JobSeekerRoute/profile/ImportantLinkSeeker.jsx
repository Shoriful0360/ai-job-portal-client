import { Pencil } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const ImportantLinkSeeker = () => {
    return (
        <div className="bg-[#1b152b] text-white rounded-md p-6 w-full mshadow-md">
          <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
                 <h2 className="text-lg font-semibold text-purple-400">Important Link</h2>
                 <Pencil size={20} className="cursor-pointer text-purple-400 hover:text-white" />
               </div>
  
        <div className=" gap-y-6 text-lg">
          <InfoRow label="CV link (Google Drive)"  value="Open CV Link" />
          <InfoRow label="Github  Profile" value="Open Github Profile" />
          <InfoRow label="Portfolio link" value="Open Portfolio Link" />
           <button className='btn mt-4 text-white font-bold bg-linear-to-l from-sky-500 to-fuchsia-500'>+ Add Project Link</button>
        </div>
      </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div className='space-y-2'>
      <p className="text-gray-400">{label}</p>
    <Link to={value}>  <p className="font-semibold hover:underline cursor-pointer">{value}</p></Link>
    </div>
  );


export default ImportantLinkSeeker;