
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import EmployerCard from "../Section/EmployerCard";


const Employers = () => {
   
    const axiosSecure = UseAxios()

    const { data: allEmployers = [], refetch } = useQuery({
        queryKey: ['allEmployers'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/employers`)
            return data
        }
    })
    console.log(allEmployers)
    return (
        <div className={allEmployers.length < 5?"min-h-screen sm:px-10 px-4":"sm:px-10 px-4" }>
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Explore All Companies
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Easily manage and view all the job listings your company has posted. Keep track of active openings, <br className=" hidden sm:inline" />update job details, and monitor applicant interest — all in one place.
                </p>
            </div>
            <div>
                {
                    allEmployers.map((employer,index) => <EmployerCard index-={index} key={employer.email} employer={employer}></EmployerCard>)
                }
            </div>
        </div>
    );
};

export default Employers;