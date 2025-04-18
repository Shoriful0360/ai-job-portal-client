import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import UseAxios from "./UseAxios";


const useRole = () => {
    const { user, loading } = useSelector((state) => state.auth)
    const axiosPublic = UseAxios()
    const { data: role, isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !!user,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/user-info/role/${user?.email}`)
            return data
        }
    })
    return { role, isLoading };
};

export default useRole;