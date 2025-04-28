import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://ai-job-portal-server.vercel.app'
}) 
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;