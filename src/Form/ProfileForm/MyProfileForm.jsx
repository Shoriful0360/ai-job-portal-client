import React from 'react';
import { CiUser } from "react-icons/ci";
import { MdOutlineMailLock } from "react-icons/md";
import { CiSliderVertical } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
const MyProfileForm = () => {
    return (
        <div className="card w-full shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset space-y-10">
        {/* 1st line field */}
        <div className='flex gap-4'>
        <div className="w-full">
                                <label className="label text-white text-xl ">
                                  <span><CiUser /></span>
                                    <span className="label-text ">Full Name</span>
                                </label>
                                <input type="text"  name='name' 
                            placeholder='shoriful Islam'
                                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
                                

                            </div> 
        <div className="w-full">
                                <label className="label text-white text-xl ">
                                  <span><MdOutlineMailLock /></span>
                                    <span className="label-text ">Email</span>
                                </label>
                                <input type="text"  name='name' 
                            placeholder='shoriful Islam'
                                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
                                

                            </div> 
                           
        </div>
        <div className='flex gap-4'>
        <div className="w-full">
                                <label className="label text-white text-xl ">
                                  <span><CiSliderVertical /></span>
                                    <span className="label-text ">Student Id</span>
                                </label>
                                <input type="text"  name='name' 
                            placeholder='shoriful Islam'
                                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
                                

                            </div> 
        <div className="w-full">
                                <label className="label text-white text-xl ">
                                  <span><CiMobile4 /></span>
                                    <span className="label-text ">Mobile Number</span>
                                </label>
                                <input type="text"  name='name' 
                            placeholder='shoriful Islam'
                                className="input w-full rounded-md bg-[#20172d] focus:bg-white focus:text-black font-bold input-bordered" required />
                                

                            </div> 
                           
        </div>
        <div>
        <label className="label text-white text-xl ">
                                  
                                    <span className="label-text ">Profile Image</span>
                                </label>
                                
        </div>

        <button type="submit" className="px-4 py-2 bg-gradient-to-r w-fit from-purple-500 to-blue-500 text-white rounded-md">
            Save changes
          </button>
          </fieldset>
        </div>
      </div>
    );
};

export default MyProfileForm;