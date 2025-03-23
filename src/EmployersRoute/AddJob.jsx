import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import UseAxios from "../Utility/UseAxios";
import Swal from "sweetalert2";


const AddJob = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault()
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const category = e.target.category.value
        const requirement = e.target.requirement.value
        const location = e.target.location.value
        const minSalary = e.target.minSalary.value
        const maxSalary = e.target.maxSalary.value
        const deadline = e.target.deadline.value
        const educationLevel = e.target.educationLevel.value

        const keySkill = e.target.skill.value
        const array = keySkill.split(',')
        const skill = array.map(word => word.charAt(0).toUpperCase() + word.slice(1))

        const jobType = e.target.jobType.value
        const jobTime = e.target.jobTime.value
        const image = e.target.image.value
        const experience = e.target.experience.value
        const email = e.target.email.value
        const name = e.target.name.value
        const jobPostTime = new Date()
        const status = 'pending'
        if (title.length < 15) {
            return Swal.fire({
                title: 'Title Minimum 20 Character Long !',
                icon: "error",
                draggable: true
            });
        }


        const jobAllData =
            { title, description, category, requirement, location, educationLevel, minSalary, maxSalary, deadline, skill, jobTime, jobType, image, experience, name, email, status, jobPostTime }

        try {
            await axiosSecure.post('/pendingJob', jobAllData)
            Swal.fire({
                title: "Added SuccessFully!",
                icon: "success",
                draggable: true
            });

        } catch {

        } finally {

        }
    }


    return (
        <div>
            <h3 className="text-center mt-20 text-3xl font-bold my-8">Added New Job</h3>
            <div className="w-10/12 mx-auto p-12 bg-blue-300 rounded-tl-full rounded-br-full sm:rounded-br-none">
                <div className="card bg-base-100 lg:w-8/12 mx-auto my-4  ">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset p-6 bg-gray-300">
                            <label className=" fieldset-label text-sm font-bold text-gray-700">Job Title</label>
                            <input type="text" name="title" className="input w-full" required placeholder="Title" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Description</label>
                            <input type="text" name="description" className="input w-full" required placeholder="Description" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700"> Job Category</label>
                            <select type="text" name="category" className="input w-full" required placeholder=" Job Category" >
                                <option value="IT & Software">IT & Software</option>
                                <option value="Business & Marketing'">Business & Marketing'</option>
                                <option value="Engineering & Technical">Engineering & Technical</option>
                                <option value="Creative & Design">Creative & Design</option>
                                <option value="Healthcare & Medical">Healthcare & Medical</option>
                                <option value="Education & Training">Education & Training</option>
                                <option value="Legal & Law">Legal & Law</option>
                                <option value="Retail & E-commerce">Retail & E-commerce</option>
                            </select>

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Requirement</label>
                            <input type="text" name="requirement" className="input w-full" required placeholder="Requirement" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Location</label>
                            <input type="text" name="location" className="input w-full" required placeholder="Location" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Min Salary</label>
                            <input type="number" name="minSalary" className="input w-full" required placeholder="Min Salary" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Max Salary</label>
                            <input type="number" name="maxSalary" className="input w-full" required placeholder="Max Salary" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Deadline</label>
                            <input type="date" name="deadline" className="input w-full" required placeholder="Deadline" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Key Skill</label>
                            <input type="text" name="skill" onKeyDown={handleKeyDown} className="input w-full" required placeholder="Key Skill" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Job Type</label>
                            <select type="text" name="jobType" className="input w-full" required placeholder="Job Type" >
                                <option value="Part Time">Part Time</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Job Time</label>
                            <select type="text" name="jobTime" className="input w-full" required placeholder="Job Time" >
                                <option value="6 Hours">6 Hours</option>
                                <option value="8 Hours">8 Hours</option>
                                <option value="9 Hours">9 Hours</option>
                                <option value="10 Hours">10 Hours</option>
                                <option value="12 Hours">12 Hours</option>
                            </select>

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Minimum Experience</label>
                            <select type="text" name="experience" className="input w-full" required placeholder="" >
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
                                <option value="">Select an option</option>
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

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Employer Logo</label>
                            <input disabled defaultValue={user?.photoURL} type="text" name="image" className="file-input file-input-md w-full" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Employer Email</label>
                            <input disabled defaultValue={user?.email} type="text" name="email" className="input w-full" placeholder="" />

                            <label className=" fieldset-label text-sm font-bold text-gray-700">Employer Name</label>
                            <input disabled defaultValue={user?.displayName} type="text" name="name" className="input w-full" placeholder="" />

                            <button className="btn btn-primary mt-4">Add Task</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;