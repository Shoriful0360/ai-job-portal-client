import axios from "axios";

const axiosSecure = axios.create({
<<<<<<< HEAD
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
=======
    baseURL:'https://ai-job-portal-server.vercel.app'
>>>>>>> 1260cff8b467c3e36e9d56298dcbef45238ebb06
}) 
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;