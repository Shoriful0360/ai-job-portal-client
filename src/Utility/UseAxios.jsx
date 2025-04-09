import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
}) 
const UseAxios = () => {
 return axiosSecure;
};

export default UseAxios;