import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import UseAxios from '../../Utility/UseAxios';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';

const EducationForm = ({ setVisible }) => {
  const {role,isLoading,refetch}=useRole()
  console.log(role)
  if(isLoading) return <LoadingSpinner/>
  const {cse,degree,Institution,studying,current_year,education_level,passing}= role?.Education || {}
const {user}=useSelector((state)=>state.auth)
const axiosPublic=UseAxios()
  const [education, setEducation] = useState({

    isStudying: true,
    passingYear: '',
    currentYear: '4th Year',
    isCSE: 'no', // 'yes' or 'no'
  });

  const handleChange = (field, value) => {
    setEducation({ ...education, [field]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
     const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
         
        
        
          try{
           const res= await axiosPublic.post(`/update-user/${user?.email}`,{Education:data})
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6  p-6 bg-[#1f152a]  rounded-xl shadow-xl   mx-auto text-white"
    >
      <div className="text-lg font-semibold mb-4">Education</div>

      {/* Education Level */}
      <div>
        <label className="block mb-1">📚 Select your Education level</label>
        <select
          className="w-full bg-gray-800  p-3 rounded-md focus:outline-none"
         defaultValue={education_level}
          name='education_level'
         
        >
            <option >SSC</option>
          <option>Higher Secondary</option>
          <option>Bachelor's</option>
          <option>Master's</option>
        </select>
      </div>

      {/* Degree Title */}
      <div>
        <label className="block mb-1">🎓 Exam/Degree Title</label>
        <input
        name='degree'
          className="w-full bg-gray-800  p-3 rounded-md focus:outline-none"
          type="text"
         defaultValue={degree}
          
        />
      </div>

      {/* Institution Name */}
      <div>
        <label className="block mb-1">🏫 Institution Name</label>
        <input
        name='Institution'
          className="w-full bg-gray-800  p-3 rounded-md focus:outline-none"
          type="text"
         defaultValue={Institution}
          
        />
      </div>

      {/* Currently Studying */}
      <div className="flex items-center space-x-3">
        <input
        name='studying'
          type="checkbox"
          defaultValue={studying}
          checked={education.isStudying}
          onChange={() => handleChange('isStudying', !education.isStudying)}
          className="form-checkbox h-5 w-5 text-green-500 bg-[#2c293f] border-gray-600"
        />
        <label className="text-sm font-medium">✅ I'm Currently Studying</label>
      </div>

      {/* Year Fields */}
      <div className="grid grid-cols-2 gap-6">
        {!education.isStudying ? (
          <div>
            <label className="block mb-1">📅 Approximate Passing Year</label>
            <input
            name='passing'
              type="text"
              className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
             defaultValue={passing}
              onChange={(e) => handleChange('passingYear', e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label className="block mb-1">📅 Current Year</label>
            <select
            name='current_year'
              className="w-full bg-gray-800  p-3 rounded-md focus:outline-none"
              defaultValue={current_year}
              onChange={(e) => handleChange('currentYear', e.target.value)}
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
        )}
      </div>

      {/* CSE/CS Student */}
      <div>
        <label className="block mb-1">💻 Are you a CSE/CS student?</label>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="cse"
              defaultValue={cse}
              checked={education.isCSE === 'yes'}
              onChange={() => handleChange('isCSE', 'yes')}
              className="form-radio h-4 w-4 text-green-500 bg-gray-800  border-gray-600"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="cse"
             defaultValue={cse}
              checked={education.isCSE === 'no'}
              onChange={() => handleChange('isCSE', 'no')}
              className="form-radio h-4 w-4 text-green-500 bg-[#2c293f] border-gray-600"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
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

export default EducationForm;