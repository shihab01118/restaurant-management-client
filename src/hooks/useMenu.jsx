import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setIsLoading(false);
      });
  }, []);

  return { menu, isLoading };
};
export default useMenu;
