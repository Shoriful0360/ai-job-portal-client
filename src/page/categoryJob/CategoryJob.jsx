
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../shared/LoadingSpinner";
import UseAxios from "../../Utility/UseAxios";
import JobCard from "../../component/Homepage/JobCard";


const CategoryJob = () => {
    const { title } = useParams()
    const axiosPublic = UseAxios()
    const navigate = useNavigate()

    const { isPending, data: category } = useQuery({
        queryKey: ['categoryJob', title],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/category-job/${title}`)
            return data
        }
    })
    if (isPending) {
        return <LoadingSpinner />
    }

    return (
        <div className={category.length < 12 ? "min-h-screen " : ""}>
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Explore Job Opportunities
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Explore available job listings in one place! From tech to teaching, startups to enterprises — we’ve got something for everyone. <br className="hidden sm:inline" /> Start scrolling, find your fit, and apply with confidence.
                </p>
            </div>
            {
                category?.length ? <div className="grid my-10 md:mx-10 mx-4 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
                
                    {
                        category?.map((job) => <JobCard job={job}></JobCard>)
                    }

                </div>
                    :
                    <div className="flex flex-col items-center min-h-screen justify-center text-center p-8 text-gray-500">
                        <div className="text-6xl mb-4">📭</div>
                        <h2 className="text-xl font-semibold">No Data Found</h2>
                        <p className="text-sm mt-2">There’s nothing here yet. Please check back later.</p>
                        <button onClick={() => navigate(-1)} className="btn mt-4">Back</button>
                    </div>
            }
        </div>
    );
};

export default CategoryJob;