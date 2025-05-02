
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { imageUpload } from '../../Utility/imageUpload';
import Swal from 'sweetalert2';
import { compareAsc } from "date-fns";
import UseAxios from '../../Utility/UseAxios';
import { GoUpload } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';


const ApplyModal = ({ isOpen, close, detailsJob, refetch, handlefileChange, fileInfo }) => {
  const axiosSecure = UseAxios()
  const { user } = useSelector((state) => state.auth)
  const { category, deadline, description, email, image, jobTime, skill, jobType, location, maxSalary, minSalary, name, title, _id, experience, requirement, applyCandidate } = detailsJob

  // apply job post
  const handleApply = async (e) => {
    e.preventDefault()
    const jobSeekerName = e.target.name.value
    const jobSeekerEmail = e.target.email.value
    const jobSeekerExperience = e.target.experience.value
    const jobSeekerEducation = e.target.educationLevel.value
    const resume = e.target.resume.files[0]
    const jobSeekerResume = await imageUpload(resume)



    if (jobSeekerEmail === email) {
      return Swal.fire({
        title: "You Are Not Job Seeker!",
        icon: "error",
        draggable: true
      });
    }
    if (compareAsc(new Date(), new Date(deadline)) === 1) {
      return Swal.fire({
        title: "Deadline Over,Apply Forbidden!",
        icon: "error",
        draggable: true
      });
    }

    const applyData = {
      jobSeekerName, jobSeekerEmail, jobSeekerEducation, jobSeekerExperience, jobSeekerResume, category, deadline, description, jobTime, skill, jobType, location, maxSalary, minSalary, experience, requirement, title, companyEmail: email, companyName: name, companyLogo: image, jobId: _id, applyCandidate, status: 'pending',
    }

    try {
      const data = await axiosSecure.post(`/applyJob/${user?.email}?jobId=${_id}`, applyData)
      if (!data.data.insertedId) {
        return Swal.fire({
          title: "You Are All Ready Apply To This Job!",
          icon: "error",
          draggable: true
        });
        close()
      } else {
        await axiosSecure.patch(`/updateApplyCount/${_id}`)
        Swal.fire({
          title: "Job Apply Successful!",
          icon: "success",
          draggable: true
        });
        refetch()
        close()   
      }

    } catch {

    }
  }
  return (
    <div className=''>
      <Dialog open={isOpen} as="div" className=" relative z-50 focus:outline-none " onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex  min-h-full items-center justify-center p-4 ">
            <form onSubmit={handleApply}>
              <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-2xl  font-medium">
                  Applying for {title}
                </DialogTitle>
                <p>{name}</p>
                <div className="divider"></div>

                <label className="my-1 fieldset-label text-sm font-bold text-gray-700">Job Seeker Email</label>
                <input disabled defaultValue={user?.email} type="text" name="email" className="input w-full" placeholder="" />

                <label className="my-1 fieldset-label text-sm font-bold text-gray-700">Job Seeker Name</label>
                <input type="text" name="name" className="input w-full" placeholder="Name" />


                <label className="my-1 fieldset-label text-sm font-bold text-gray-700">Experience</label>
                <select type="text" name="experience" className="input w-full" required placeholder="" >
                  <option value="1 Year">No Experience</option>
                  <option value="1 Year">6 Month</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4 Years">4 Years</option>
                  <option value="5 Years">5 Years</option>
                  <option value="6 Years">6 Years</option>
                  <option value="7 Years">7 Years</option>
                </select>

                <label className="my-1 fieldset-label text-sm font-bold text-gray-700">Educational Level</label>
                <select type="text" name="educationLevel" className="input w-full" required placeholder="">
                  <option value="ssc">SSC</option>
                  <option value="hsc">HSC</option>
                  <option value="diploma(Complete)">Diploma(Complete)</option>
                  <option value="diploma(Ongoing)">Diploma(Ongoing)</option>
                  <option value="bachelor(Complete)">Bachelor(Complete)'s </option>
                  <option value="bachelor(Ongoing)">Bachelor's(Ongoing)</option>
                  <option value="master's(Complete)">Master's(Complete)</option>
                  <option value="master's(Ongoing)">Master's(Ongoing)</option>
                  <option value="phd">Ph.D</option>
                </select>

                <div className=''>
                  {/* resume */}
                  <div className='mt-2 space-y-3'>
                    <h3>Custom resume <span className='text-gray-500'>(Optional)</span></h3>
                    <p className='text-gray-500'>Employer can download and view this resume</p>

                    <div className='file_upload px-5 py-3 relative border-2 border-dotted border-gray-300 rounded-lg'>
                      <div className='flex flex-col w-max mx-auto text-center'>
                        <label>
                          <input
                            onChange={handlefileChange}

                            className='text-sm cursor-pointer w-36 hidden'
                            type='file'
                            name='resume'
                            id='image'


                          />
                          {
                            fileInfo ?
                              <div className="flex gap-2 items-center ">
                                <p className='bg-red-600 py-2 rounded-md text-white uppercase text-xl px-2'> {fileInfo.type.split("/")[1]}</p> {/* Extracting the extension */}
                                <div>
                                  <p> {fileInfo.name}</p>
                                  <p>{fileInfo.size}</p> {/* File size in KB or MB */}
                                </div>
                              </div>
                              :
                              <div className='flex gap-2 text-xl font-bold text-gray-500 items-center'>

                                <GoUpload /> Upload File
                              </div>


                          }

                        </label>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="mt-4 flex justify-between ">
                  <button className='btn bg-[#A59488] text-black'>
                    submit
                  </button>
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-[#A59488] py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none "
                    onClick={close}
                  >
                    close
                  </Button>

                </div>
              </DialogPanel>
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ApplyModal;