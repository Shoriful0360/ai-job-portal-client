import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {
    const[categoryJob,setCategoryJob]=useState([])
    useEffect(()=>{
        fetch('/public/categoryJob.json')
        .then(res=>res.json())
        .then(data=>setCategoryJob(data))
    },[])
   
    return (
        <div className="mt-10 mx-10 py-10">
         <div className="text-center max-w-2xl mx-auto space-y-3">
         <h1 className="text-5xl font-bold ">Job Category</h1> 
         <p>Here are some well-structured descriptions for different job categories in your AI job portal. You can use them directly or modify them as needed.</p>
         </div>
         {/* map category card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-10">
      {
            categoryJob?.map(item=><CategoryCard key={item.id} item={item}/>)
         }
      </div>
        </div>
    );
};

export default Category;