import React, { useEffect, useState } from 'react';
import UseAxios from '../../Utility/UseAxios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';

const AdditionalInfoForm = ({setVisible,refetch}) => {
  const{user}=useSelector((state)=>state.auth)
  const{role,isLoading}=useRole()
  const axiosPublic=UseAxios()
const [industryType,setIndustryType]=useState([])
if(isLoading) return <LoadingSpinner/>
const{ageRange,areaType,deviceType,experience,gender,internetType,employmentRole,about_company,achievement,company_type,founder_year,headquarter,size}=role?.additionalInfo || {}
  // industy type api
    useEffect(() => {
          const fetchSkills = async () => {
            try {
              const response = await axios.get('/industry.json');
        
              setIndustryType(response.data);
            } catch (error) {
              console.error('Error fetching skills:', error);
            }
          };
      
          fetchSkills();
        }, []);
    const handleSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
   
        try{
          await axiosPublic.post(`/update-user/${user?.email}`,{additionalInfo:data})
      Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Information is Update",
          showConfirmButton: false,
          timer: 1200
        });
        refetch()
        setVisible(false)
        }catch(error){
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
    return (
        <form onSubmit={handleSubmit} className=" mx-auto p-6 bg-[#1f152a]  text-white rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-6">Additional Info</h2>
  
        <div className="grid grid-cols-2 gap-6">
          {/* emplyer info */}
           {/* Industry type */}
           <div>
            <label className="block mb-2 font-medium">Industry</label>
            <select name="company_type" className="w-full bg-gray-800 rounded-md p-2">
            {industryType?.map((info,id) => (
            <option  key={id} value={info}>
              {info}
            </option>
          ))}
            </select>
          </div>
          {/* company size */}
          <div>
            <label className="block mb-2 font-medium">Industry</label>
            <select name="size" className="w-full bg-gray-800 rounded-md p-2">
           <option value="0-100">0-100</option>
           <option value="101-200">101-200</option>
           <option value="201-500">201-500</option>
           <option value="501-1000">501-1000</option>
           <option value="1001-5000">1001-5000</option>
           <option value="5001-10000">5001-10000</option>
           <option value="10000+">10000+</option>
            </select>
          </div>

{/* employer info */}
{role?.role==="Employer" &&
  <>
  {/* founder year */}
  <div>
  <label className="block mb-2"> Founder Year</label>
  <input
  type='number'
    className="w-full bg-gray-800 p-2 rounded-md"
   name='founder_year'
  />
</div>
  {/* about Company */}
  <div>
  <label className="block mb-2"> About Company</label>
  <input
  type='text'
    className="w-full bg-gray-800 p-2 rounded-md"
   name='about_company'
  />
</div>

{/* head quarter */}
<div >
  <label className="block mb-2">Headquearters Location</label>
  <input
  type='text'
    className="w-full bg-gray-800 p-2 rounded-md"
    name='headquarter'
 
  />
</div>
{/* achievement */}
<div >
  <label className="block mb-2">Achievements</label>
  <input
  type='text'
    className="w-full bg-gray-800 p-2 rounded-md"
    name='achievement'
 
  />
</div>
 </>
}
       
  {/* jobseeker info */}
  {role?.role==="Job Seeker" &&
     <>
     {/* Gender */}
     <div>
       <label className="block mb-2 font-medium">Your Gender</label>
       <div className="flex items-center gap-4">
         <label className="inline-flex items-center">
           <input
             type="radio"
             name="gender"
             value="Male"
             className="form-radio text-green-500"
             defaultChecked
           />
           <span className="ml-2">Male</span>
         </label>
         <label className="inline-flex items-center">
           <input type="radio" name="gender" value="Female" className="form-radio" />
           <span className="ml-2">Female</span>
         </label>
       </div>
     </div>

     {/* Age Range */}
     <div>
       <label className="block mb-2 font-medium">Age Range</label>
       <select name="ageRange" className="w-full bg-gray-800 rounded-md p-2">
         <option value="20-25">20-25</option>
         <option value="26-30">26-30</option>
         <option value="31-35">31-35</option>
       </select>
     </div>

     {/* Primary Device */}
     <div>
       <label className="block mb-2 font-medium">Primary Device Type</label>
       <select name="deviceType" className="w-full bg-gray-800 rounded-md p-2">
         <option value="Computer">Computer</option>
         <option value="Mobile">Mobile</option>
         <option value="Tablet">Tablet</option>
       </select>
     </div>

     {/* Internet Type */}
     <div>
       <label className="block mb-2 font-medium">Internet Type</label>
       <select name="internetType" className="w-full bg-gray-800 rounded-md p-2">
         <option value="Mobile">Mobile</option>
         <option value="Wi-Fi">Wi-Fi</option>
         <option value="Broadband">Broadband</option>
       </select>
     </div>

     {/* Years of Experience */}
     <div>
       <label className="block mb-2 font-medium">Years of Experience</label>
       <select name="experience" className="w-full bg-gray-800 rounded-md p-2">
         <option value="0">0</option>
         <option value="1">1</option>
         <option value="2+">2+</option>
       </select>
     </div>

     {/* Employment Role */}
     <div>
       <label className="block mb-2 font-medium">Employment Role</label>
       <select name="employmentRole" className="w-full bg-gray-800 rounded-md p-2">
         <option value="None">None</option>
         <option value="Student">Student</option>
         <option value="Freelancer">Freelancer</option>
         <option value="Job Holder">Job Holder</option>
       </select>
     </div>

     {/* Area Type */}
     <div>
       <label className="block mb-2 font-medium">Area Type</label>
       <select name="areaType" className="w-full bg-gray-800 rounded-md p-2">
         <option value="Village">Village</option>
         <option value="Town">Town</option>
         <option value="City">City</option>
       </select>
     </div>
 </>
  }

   
        </div>
  
        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4 mt-4">
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

export default AdditionalInfoForm;