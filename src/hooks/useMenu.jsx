import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch("/menu.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMenu(data);
    //     setIsLoading(false);
    //   });
    axios.get("http://localhost:5000/api/v1/user/menus")
    .then(res => {
      setMenu(res.data)
      setIsLoading(false)
    })
  }, []);

  return { menu, isLoading };
};
export default useMenu;
