
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import LoadingSpinner from "../../shared/LoadingSpinner";
import UseAxios from "../../Utility/UseAxios";
import JobCard from "../../component/Homepage/JobCard";


const CategoryJob = () => {
    const {title}=useParams()
    const axiosPublic=UseAxios()
    const navigate=useNavigate()

    const{isPending,data:category}=useQuery({
        queryKey:['categoryJob',title],
        queryFn:async()=>{
         const {data}= await axiosPublic.get(`/category-job/${title}`)
         return data
        }
    })
    if(isPending){
       return <LoadingSpinner/>
    }
 
    return (
     <div>
        {
            category?.length?    <div className="grid my-10 md:mx-10 mx-4 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {
                category?.map((job)=><JobCard job={job}></JobCard>)
            }
     
        </div>
        :
        <div className="flex flex-col items-center justify-center text-center p-8 text-gray-500">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="text-xl font-semibold">No Data Found</h2>
        <p className="text-sm mt-2">There’s nothing here yet. Please check back later.</p>
        <button onClick={()=>navigate(-1)}  className="btn mt-4">Back</button>
      </div>
        }
     </div>
    );
};

export default CategoryJob;