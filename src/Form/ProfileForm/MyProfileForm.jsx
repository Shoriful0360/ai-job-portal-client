import React, { useRef, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { MdOutlineMailLock } from "react-icons/md";
import { CiSliderVertical } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineUpload } from "react-icons/hi";
import { FaLock } from "react-icons/fa";
import { imageUpload } from '../../Utility/imageUpload';
import UseAxios from '../../Utility/UseAxios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import useRole from '../../Utility/useRole';


const MyProfileForm = ({setVisible}) => {
const axiosPublic=UseAxios()
const{role}=useRole()
const{email,name,number,photoUrl,_id,}=role || {}
const{user}=useSelector((state)=>state.auth)
  const [previewImage, setPreviewImage] = useState(photoUrl);
  
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange =async (e) => {
    const file = e.target.files[0];
    const image=await imageUpload(file)
    if(image){
      setPreviewImage(image)
     
    }

  };

  const handleInfoSubmit=async(e)=>{
    e.preventDefault();
    const formData=new  FormData(e.target);
    const data=Object.fromEntries(formData.entries());
    data.photoUrl= previewImage
    try{
      const result=await axiosPublic.post(`/update-user/${user?.email}`,data)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Your Information is Update",
        showConfirmButton: false,
        timer: 1200
      });
   setVisible(false)
    }catch(error){
      const errorMessage=error.message
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: {errorMessage},
        showConfirmButton: false,
        timer: 1200
      });
    }
   
  }
  return (
    <div className="card w-full shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleInfoSubmit} className="fieldset space-y-10">
          {/* 1st line field */}
          <div className='flex gap-4'>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><CiUser /></span>
                <span className="label-text ">Full Name</span>
              </label>
              <input type="text" name='name'
              
                placeholder={name?name:"Enter Your Name"}
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />


            </div>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><MdOutlineMailLock /></span>
                <span className="label-text ">Email</span>
              </label>
              <input type="email" name='email'
              disabled
              value={email}
                className="input w-full border-none rounded-md !bg-[#20172d] !text-white font-bold " />


            </div>

          </div>
          <div className='flex gap-4'>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><CiSliderVertical /></span>
                <span className="label-text ">User Id</span>
              </label>
              <input type="text" name='userId'
            disabled
               value={`JVI-${_id.slice(-5)}`}
                className="input  w-full rounded-md border-none  !bg-[#20172d]  font-bold !text-white"  />


            </div>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><CiMobile4 /></span>
                <span className="label-text ">Mobile Number</span>
              </label>
              <input type="number" name='number'
                  placeholder={number?number:"Enter Your Name"}
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />


            </div>

          </div>
          {/* image upload */}
          <label className="label text-white text-xl ">

            <span className="label-text ">Profile image</span>
          </label>
          <button
            type="button"
            onClick={handleImageClick}
            className=" text-start flex gap-1 text-sm font-medium"
          >
            <HiOutlineUpload className='text-xl ' />
            Change Profile Image
          </button>
          <div className="flex flex-col  w-full md:w-1/3">
            <div
              onClick={handleImageClick}
              className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
            >
              { previewImage ? (
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-500 text-sm text-center">Profile Image</span>
              )}
            </div>
            <input
              type="file"
        
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

          </div>

          <button type="submit" className="px-4 py-2 bg-gradient-to-r w-fit from-purple-500 to-blue-500 text-white rounded-md">
            Save changes
          </button>
        </form>
        {/* password */}
        <form className='mt-6' action="">
        <div className="w-full">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">Current Password</span>
              </label>
              <input type="password" name='name'
                placeholder='shoriful Islam'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />


            </div>
        <div className='flex gap-4 mt-4'>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">Current Password</span>
              </label>
              <input type="password" name='name'
                placeholder='shoriful Islam'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />


            </div>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">New Password</span>
              </label>
              <input type="password" name='name'
                placeholder='shoriful Islam'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />


            </div>

          </div>
          
          <button type="submit" className="px-4 mt-4 py-2 bg-gradient-to-r w-fit from-purple-500 to-blue-500 text-white rounded-md">
           Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfileForm;