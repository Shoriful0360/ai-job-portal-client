import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineLink, AiOutlineFilePdf, AiOutlinePicture } from 'react-icons/ai';
import ImportantLinkForm from '../../Form/ProfileForm/ImportantLinkForm';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { Pencil } from 'lucide-react';


/**
 * Component: ImportantLinkSeeker
 * Displays important links and toggles the edit form.
 */
const ImportantLinkSeeker = () => {
  const [visible, setVisible] = useState(false);
  const{role,isLoading,refetch}=useRole()
  if(isLoading) return <LoadingSpinner/>
const{cvLink,github,linkedin,portfolio,profileImage,companyWebsite,facebook,youtube}= role?.SocialLink || {}
  // Example initial values; replace with data from your API or context
  const linkData = {
    cvLink: cvLink,
    github: github,
    portfolio: portfolio,
    linkedin:linkedin,
    profileImage: profileImage,
    companyWebsite:companyWebsite,
    facebook:facebook,
    youtube:youtube,
  };

  return (
    <div className="bg-[#1b152b] text-white rounded-md p-6 w-full shadow-md">
    <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
          <h2 className="text-lg font-semibold text-purple-400">Education</h2>
          <Pencil onClick={()=>setVisible(true)} size={20} className="cursor-pointer text-purple-400 hover:text-white" />
        </div>

      {visible ? (
        <ImportantLinkForm setVisible={setVisible} />
      ) : (
        <div className="space-y-6 text-lg">

          {/* employer info */}
          {
            role?.role==="Employer" &&
            <>
              <InfoRow label="Company Website" url={linkData.cvLink} />
          <InfoRow label="Youtube channel" url={linkData.cvLink} />
    
            </>
          }
        
          {/* job seeker info */}
          {
            role?.role==="Job Seeker" && 
            <>
            <InfoRow label="CV link (Google Drive)" url={linkData.cvLink} />
          <InfoRow label="GitHub Profile" url={linkData.github} />
          <InfoRow label="Portfolio link" url={linkData.portfolio} />
            </>
          }
          {/* common info */}

          <InfoRow label="Facebook Page" url={linkData?.facebook} />
          <InfoRow label="Linkedin Page" url={linkData?.linkedin} />
          <InfoRow label={role?.role==="Employer"?"Professional company Logo":"Professionl Image"} url={linkData?.profileImage} />
        </div>
      )}
    </div>
  );
};

/**
 * Component: InfoRow
 * Displays a label and a clickable URL that opens in a new tab.
 */
const InfoRow = ({ label, url }) => (
  <div className="space-y-1">
    <p className="text-gray-400">{label}</p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:underline block"
    >
   {url?`Open ${label.split(' ')[0]}`:"None"}
      
    </a>
  </div>
);

export default ImportantLinkSeeker;
