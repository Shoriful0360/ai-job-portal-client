import React, { useRef, useState } from 'react';
import { CiUser } from "react-icons/ci";
import { MdOutlineMailLock } from "react-icons/md";
import { CiSliderVertical } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineUpload } from "react-icons/hi";
import { FaLock, FaRegEyeSlash } from "react-icons/fa";
import { imageUpload } from '../../Utility/imageUpload';
import UseAxios from '../../Utility/UseAxios';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
import { changePassword } from '../../Redux/authSlice';
import { FiEye } from "react-icons/fi";

const MyProfileForm = ({setVisible}) => {
const axiosPublic=UseAxios()
const{role,isLoading,refetch}=useRole()
const[isVisible,setIsVisiblle]=useState(false)
const dispatch=useDispatch()
const{user,successMessage}=useSelector((state)=>state.auth)
  
  const fileInputRef = useRef(null);
  if(isLoading)return <LoadingSpinner/>
  const{email,name,number,photoUrl,_id,companyName}=role || {}
  const [previewImage, setPreviewImage] = useState(photoUrl);
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

  // handleUpdate password

  const handleUpdatePassword=async(e)=>{
    e.preventDefault()
    const currentPassword=e.target.current_password.value;
    const newPassword=e.target.new_password.value;
    const confirmPassword=e.target.confirm_password.value;

    if(newPassword !==confirmPassword){
      return Swal.fire({
        icon: "error",
        title: "New passwords do not match",
        timer: 1500,
      });
    }

     try{
     
     
     const result= await dispatch(changePassword({currentPassword,newPassword}))
     // ✅ Check if success
     if (changePassword.fulfilled.match(result)) {
      Swal.fire({
        icon: "success",
        title: result?.payload?.message || "Password updated successfully!",
        timer: 1500,
      });
      e.target.reset();
    }
    // ❌ Check if failed
    else if (changePassword.rejected.match(result)) {
      Swal.fire({
        icon: "error",
        title: "Your current password is wrong !",
        timer: 1500,
      });
    }

     }catch(error){
const errorMessage=error?.response?.data?.error || 'something went wrong!'
console.log(errorMessage)
Swal.fire({
  icon: "error",
  title: errorMessage,
  timer: 1500,
});
     }
  }

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
   refetch()
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
    <div className="card w-full bg-[#1f152a]  shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleInfoSubmit} className="fieldset space-y-10">
          {/* 1st line field */}
          <div className='flex gap-4'>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><CiUser /></span>
                <span className="label-text ">Full Name</span>
              </label>
              <input type="text" name={role?.role==="Employer"?"companyName":"name"}
              defaultValue={role?.role==="Employer"?companyName:name}
                placeholder="Enter your name"
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
               value={`JVI-${_id?.slice(-5)}`}
                className="input  w-full rounded-md border-none  !bg-[#20172d]  font-bold !text-white"  />


            </div>
            <div className="w-full">
              <label className="label text-white text-xl ">
                <span><CiMobile4 /></span>
                <span className="label-text ">Mobile Number</span>
              </label>
              <input type="number" name='number'
              defaultValue={number}
                  placeholder="Enter your number"
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
        <form onSubmit={handleUpdatePassword} className='mt-6' action="">
        <div className="w-full relative">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">Current Password</span>
              </label>
              <input type={isVisible?'text':'password'} name='current_password'
                placeholder='Enter current password'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
              <div className='absolute right-5 text-xl  bottom-2'>
                {
                  isVisible? <FiEye onClick={()=>setIsVisiblle(false)} />: <FaRegEyeSlash  onClick={()=>setIsVisiblle(true)}/>
                }
             
             
              </div>

            </div>
        <div className='flex gap-4 mt-4'>
            <div className="w-full relative">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">New Password</span>
              </label>
              <input type={isVisible?'text':'password'} name='new_password'
                placeholder='Enter new password'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
                    <div className='absolute right-5 text-xl  bottom-2'>
                {
                  isVisible? <FiEye onClick={()=>setIsVisiblle(false)} />: <FaRegEyeSlash  onClick={()=>setIsVisiblle(true)}/>
                }
             
             
              </div>

            </div>
            <div className="w-full relative">
              <label className="label text-white text-xl ">
                <span><FaLock /></span>
                <span className="label-text ">Confirm  Password</span>
              </label>
              <input type={isVisible?'text':'password'} name='confirm_password'
                placeholder='confirm password'
                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />

<div className='absolute right-5 text-xl  bottom-2'>
                {
                  isVisible? <FiEye onClick={()=>setIsVisiblle(false)} />: <FaRegEyeSlash  onClick={()=>setIsVisiblle(true)}/>
                }
             
             
              </div>
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