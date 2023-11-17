import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import axios from "axios";
// import { useEffect, useState } from "react";

const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  // fetch("/menu.json")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setMenu(data);
  //     setIsLoading(false);
  //   });
  //   axios.get("http://localhost:5000/api/v1/user/menus")
  //   .then(res => {
  //     setMenu(res.data)
  //     setIsLoading(false)
  //   })
  // }, []);

  const { data: menu = [], isLoading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/user/menus");
      return res.data;
    },
  });

  return { menu, isLoading, refetch };
};
export default useMenu;
