import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import JobCard from "../component/Homepage/JobCard";
import React from "react";
import LoadingSpinner from "../shared/LoadingSpinner";
const Suggestion = () => {
    const skills = ['Html','JavaScrift','React.js','Css']
    const skill = JSON.stringify(skills)
    console.log(skill)
    const axiosSecure = UseAxios()
    const { data: AIJobs = [], isLoading } = useQuery({
        queryKey: ['AIJobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/Ai/JobData?skill=${skill}`)
            return data
        }
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <div className={AIJobs.length < 8?"min-h-screen sm:px-10 px-4":"sm:px-10 px-4" } >
            <div className="sm:my-12 ">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Jobs Curated Just for You
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Our AI-powered system analyzes your profile to recommend roles that match your expertise,  experience, and career goals — saving <br className="hidden sm:inline" /> you time and helping you find the perfect fit faster.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pb-16">
                {
                    AIJobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Suggestion;