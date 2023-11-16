import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/users/admin/${user?.email}`);
      const data = res.data;
    //   console.log(data);
      return data.admin;
    },
  });

  return { isAdmin, isLoading };
};
export default useAdmin;
