import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import UseAxios from '../../Utility/UseAxios';
import Swal from 'sweetalert2';



const SkillUpdateModal = ({ setIsOpen, formData, setFormData, refetch, isOpen, id }) => {
  const [skillList, setSkillList] = useState([]);
  const   value=Array.isArray(formData.skill_name) ? formData.skill_name.join(', ') : ''
  console.log(value)
  const { user } = useSelector((state) => state.auth)
  const axiosPublic = UseAxios()
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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleKeyDown = (e) => {
    if (e.key === ' ') {
        e.preventDefault()
    }
}

  const handleSubmit = async (e) => {
    e.preventDefault()

    let skill = [];

    if (typeof formData.skill_name === 'string') {
      // If it's a string, split it into an array
      skill = formData.skill_name
        .split(',')
        .map(word => word.trim())
        .filter(word => word !== '')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        formData.skill_name=skill
    } else if (Array.isArray(formData.skill_name)) {
      // If it's already an array, just clean it
      skill = formData.skill_name
        .map(word => word.trim())
        .filter(word => word !== '')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        formData.skill_name=skill

    };

    try {
      const res = await axiosPublic.put(`/update-skill/${user?.email}/${id}`, formData)
      if (res.data.modifiedCount > 0) {

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your Information is Update",
          showConfirmButton: false,
          timer: 1200
        });
        refetch()
        setIsOpen(false)
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error.errorMessage
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: { errorMessage },
        showConfirmButton: false,
        timer: 1200
      });
    }

  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 backdrop-blur-sm bg-black/20" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Add Skill Information
                </Dialog.Title>

                skill_name
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Skill Name</label>
                    <input onKeyDown={handleKeyDown} type="text"
                    onChange={handleChange}
                   defaultValue={Array.isArray(formData.skill_name) ? formData.skill_name.join(', ') : ''}
                    name="skill_name" id="" 
         placeholder="Enter your skill(use comma)"
         className="w-full mt-1 px-3 py-2 border rounded-md"/>
              
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Experience in Year</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                    >
                      <option value="0-1">0-1</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-10">6-10</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Project Live Link</label>
                    <input
                      type="url"
                      name="Project_link"
                      value={formData.Project_link}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">GitHub Link (Client)</label>
                    <input
                      type="url"
                      name="github_link_client"
                      value={formData.github_link_client}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">GitHub Link (Server)</label>
                    <input
                      type="url"
                      name="github_link_server"
                      value={formData.github_link_server}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border rounded-md"
                    />
                  </div>

                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SkillUpdateModal;