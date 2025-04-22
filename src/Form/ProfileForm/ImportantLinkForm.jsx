import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineLink, AiOutlineFilePdf, AiOutlinePicture } from 'react-icons/ai';
import UseAxios from '../../Utility/UseAxios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';

const ImportantLinkForm = ({setVisible}) => {
    const axiosPublic=UseAxios()
    const{user}=useSelector((state)=>state.auth)
    const{role,isLoading,refetch}=useRole()
    if(isLoading) return <LoadingSpinner/>
const{cvLink,github,linkedin,portfolio,profileImage}= role?.SocialLink || {}

  const [fields, setFields] = useState({
    cvLink: cvLink,
    github: github,
    portfolio: portfolio,
    linkedin: linkedin,
    profileImage: profileImage
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit =async e => {
     e.preventDefault();
  console.log(fields)
             try{
              const res= await axiosPublic.post(`/update-user/${user?.email}`,{SocialLink:fields})
              console.log(res)
              if (res.data.modifiedCount > 0){
   
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Your Information is Update",
                    showConfirmButton: false,
                    timer: 1200
                  });
                  refetch()
                  setVisible(false)
              }
             }catch(error){
               console.log(error)
              const errorMessage=error.errorMessage
              Swal.fire({
               position: "top-center",
               icon: "error",
               title: {errorMessage},
               showConfirmButton: false,
               timer: 1200
             });
             }
 
  };

  const handleCancel = () => {
    setFields({ cvLink: '', github: '', portfolio: '', linkedin: '', profileImage: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 rounded-2xl shadow-xl bg-[#1f152a]  mx-auto space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">Important Links</h2>

      {/* CV Link */}
      <FieldRow
        icon={<AiOutlineFilePdf size={20} />}
        label="CV link (Google Drive)"
        name="cvLink"
        value={fields.cvLink}
        onChange={handleChange}
        placeholder="https://docs.google.com/..."
      />

      {/* GitHub Profile */}
      <FieldRow
        icon={<FaGithub size={20} />}
        label="GitHub Profile"
        name="github"
        value={fields.github}
        onChange={handleChange}
        placeholder="https://github.com/username"
      />

      {/* Portfolio Link */}
      <FieldRow
        icon={<AiOutlineLink size={20} />}
        label="Portfolio link"
        name="portfolio"
        value={fields.portfolio}
        onChange={handleChange}
        placeholder="https://your-portfolio.netlify.app"
      />

      {/* LinkedIn Profile */}
      <FieldRow
        icon={<FaLinkedin size={20} />}
        label="LinkedIn Profile link"
        name="linkedin"
        value={fields.linkedin}
        onChange={handleChange}
        placeholder="https://www.linkedin.com/in/..."
      />

      {/* Profile Image URL */}
      <FieldRow
        icon={<AiOutlinePicture size={20} />}
        label="Professional Profile Image URL"
        name="profileImage"
        value={fields.profileImage}
        onChange={handleChange}
        placeholder="https://i.ibb.co/..."
      />

      {/* Actions */}
      <div className="flex justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

const FieldRow = ({ icon, label, name, value, onChange, placeholder }) => (
  <div className="grid grid-cols-[auto,1fr] items-center gap-4">
    <div className="flex items-center space-x-2">
      <span className="text-white">{icon}</span>
      <span className="text-white font-medium">{label}</span>
    </div>
    <input
      type="url"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input  w-full  bg-gray-800  text-white placeholder-gray-400"
    />
  </div>
);

export default ImportantLinkForm;
