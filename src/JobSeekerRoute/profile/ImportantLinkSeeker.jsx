import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineLink, AiOutlineFilePdf, AiOutlinePicture } from 'react-icons/ai';
import ImportantLinkForm from '../../Form/ProfileForm/ImportantLinkForm';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';


/**
 * Component: ImportantLinkSeeker
 * Displays important links and toggles the edit form.
 */
const ImportantLinkSeeker = () => {
  const [visible, setVisible] = useState(false);
  const{role,isLoading,refetch}=useRole()
  if(isLoading) return <LoadingSpinner/>
const{cvLink,github,linkedin,portfolio,profileImage}= role?.SocialLink || {}
  // Example initial values; replace with data from your API or context
  const linkData = {
    cvLink: cvLink,
    github: github,
    portfolio: portfolio,
    linkedin:linkedin,
    profileImage: profileImage
  };

  return (
    <div className="bg-[#1b152b] text-white rounded-md p-6 w-full shadow-md">
      <div className="flex justify-between items-center border-b border-dashed border-purple-500 pb-4 mb-6">
        <h2 className="text-lg font-semibold text-purple-400">Important Links</h2>
        <button onClick={() => setVisible(prev => !prev)}>
          {visible ? 'Close' : 'Edit'}
        </button>
      </div>

      {visible ? (
        <ImportantLinkForm setVisible={setVisible} />
      ) : (
        <div className="space-y-6 text-lg">
          <InfoRow label="CV link (Google Drive)" url={linkData.cvLink} />
          <InfoRow label="GitHub Profile" url={linkData.github} />
          <InfoRow label="Portfolio link" url={linkData.portfolio} />
          <InfoRow label="LinkedIn Profile link" url={linkData.linkedin} />
          <InfoRow label="Professional Image URL" url={linkData.profileImage} />
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
      Open {label.split(' ')[0]}
    </a>
  </div>
);

export default ImportantLinkSeeker;
