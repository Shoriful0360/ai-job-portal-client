// SkillForm.jsx
import { Pencil, Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import UseAxios from '../../Utility/UseAxios';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const SkillForm = ({setVisible,refetch}) => {
    const{user}=useSelector((state)=>state.auth)
    const [skillList, setSkillList] = useState([]);
    const axiosPublic=UseAxios()
    useEffect(() => {
        const fetchSkills = async () => {
          try {
            const response = await axios.get('/skill.json');
            setSkillList(response.data);
          } catch (error) {
            console.error('Error fetching skills:', error);
          }
        };
    
        fetchSkills();
      }, [axiosPublic]);
    
      const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault()
        }
    }

    // const array = keySkill.split(',')
    // const skill = array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
      
      const handleSubmit =async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
        const skill= data?.skill_name.split(',').map(word=>word.trim()).filter(word=>word !=="").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        data.skill_name=skill

          try{
            await axiosPublic.post(`/add-skill/${user?.email}`,data)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "add your skill",
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
    <h2 className="text-lg font-semibold mb-6">Add an Skill</h2>

    <div className="grid grid-cols-2 gap-6">

     

      {/* skill name*/}
      <div>
        <label className="block mb-2 font-medium">Skill Name</label>
        <input onKeyDown={handleKeyDown} type="text" name="skill_name" id="" 
         placeholder="Enter your skill(use comma)"
        className="w-full bg-gray-800 rounded-md p-2"/>
     
      </div>
      {/* experience */}
      <div>
        <label className="block mb-2 font-medium">Experience in Year</label>
        <select name="experience" className="w-full bg-gray-800 rounded-md p-2">
          <option value="0-1">0-1</option>
          <option value="1-2">1-2</option>
          <option value="3-5">3-5</option>
          <option value="6-10">6-10</option>
        </select>
      </div>

{/* project link */}
<div>
        <label className="block mb-2 font-medium">Project Live Link</label>
        <input type="url" name="Project_link" id="" 
         placeholder="https://livelink.com/username"
        className="w-full bg-gray-800 rounded-md p-2"/>
      
      </div>

      {/* github link client */}
      <div>
        <label className="block mb-2 font-medium">Github Link(client)</label>
        <input type="url" name="github_link_client" id=""  placeholder="https://github.com/username" className="w-full bg-gray-800 rounded-md p-2"/>
      
      </div>
      {/* github link server */}
      <div>
        <label className="block mb-2 font-medium">Github link(server)</label>
        <input type="url" name="github_link_server" id=""
         placeholder="https://github.com/username"
        className="w-full bg-gray-800 rounded-md p-2"/>
      
      </div>
    </div>
   
    
    {/* Buttons */}
    <div className="flex justify-end gap-4 pt-2">
    <button
      type="button"
      onClick={()=>setVisible(false)}
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

export default SkillForm;
