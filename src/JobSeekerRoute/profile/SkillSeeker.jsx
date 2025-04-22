import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import SkillForm from '../../Form/ProfileForm/SkillForm';
import { useSelector } from 'react-redux';
import useRole from '../../Utility/useRole';
import LoadingSpinner from '../../shared/LoadingSpinner';
import SkillUpdateModal from '../../component/Modal/skillUpdateModal';
import Swal from 'sweetalert2';
import UseAxios from '../../Utility/UseAxios';

const SkillSeeker = () => {
  const axiosPublic=UseAxios()
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    skill_name: '',
    experience: '0-1',
    Project_link: '',
    github_link_client: '',
    github_link_server: '',
  });
  const [selectedId, setSelectedId] = useState(null);
const{user}=useSelector((state)=>state.auth)
  const { role, isLoading, refetch } = useRole();
  if (isLoading) return <LoadingSpinner />;
  const { skills } = role || {};

  // delet skill
  const handleDelet=async(id)=>{

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await axiosPublic.delete(`/delete-skill/${user?.email}/${id}`)
          if(res.data.modifiedCount>0){
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: 'Your file has been deleted.',
              showConfirmButton: false,
              timer: 1200
            });
          
            refetch()
            setIsOpen(false)
          }
          }
        
      });
    
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
    <div className="bg-[#1c1223] text-white rounded-lg p-6 mx-auto shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-[#3a2f4a] pb-3 mb-4">
        <h2 className="text-lg font-medium text-purple-400">
          Skill Set <span className="text-sm text-gray-400">ⓘ</span>
        </h2>
        <button
          onClick={() => setVisible(true)}
          className="text-sm text-purple-400 hover:underline"
        >
          + Add Skill
        </button>
      </div>

      {/* Skill Card */}
      {visible ? (
        <SkillForm setVisible={setVisible} refetch={refetch} />
      ) : (
        <>
          {skills?.map((skill, index) => (
            <div
              key={skill?.id}
              className="relative border border-[#3a2f4a] bg-[#1f152a] rounded-lg p-5 mb-4"
            >
              {/* Skill Tag */}
              <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs px-3 py-1 rounded">
                Skill {index + 1}
              </div>

              {/* Edit/Delete Icons */}
              <div className="absolute top-3 right-4 flex space-x-3">
                <button
                  onClick={() => {
                    setFormData({
                      skill_name: skill?.skill_name,
                      experience: skill?.experience,
                      Project_link: skill?.Project_link,
                      github_link_client: skill?.github_link_client,
                      github_link_server: skill?.github_link_server,
                    });
                    setSelectedId(skill?.id);
                    setIsOpen(true);
                  }}
                  className="text-purple-300 hover:text-purple-100"
                >
                  <Pencil size={16} />
                </button>
                <button onClick={()=>handleDelet(skill?.id)} className="text-red-400 hover:text-red-300">
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Skill Info */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm text-gray-400">Skill Name</p>
                  <p className="font-semibold">{skill?.skill_name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Year of Experience</p>
                  <p className="font-semibold">{skill?.experience}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-1">Project Link</p>
                  <a
                    href={skill?.Project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 text-sm break-words hover:underline"
                  >
                    {skill?.Project_link}
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-1">Github Link (client)</p>
                  <a
                    href={skill?.github_link_client}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 text-sm break-words hover:underline"
                  >
                    {skill?.github_link_client}
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-1">Github Link (server)</p>
                  <a
                    href={skill?.github_link_server}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-300 text-sm break-words hover:underline"
                  >
                    {skill?.github_link_server}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Modal Component with dynamic data */}
      <SkillUpdateModal
        refetch={refetch}
        id={selectedId}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default SkillSeeker;
