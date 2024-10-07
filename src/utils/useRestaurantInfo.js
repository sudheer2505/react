import { useEffect, useState } from "react";
import { RESTAURANT_MENU_LINK } from "./constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  fetchMenuDetails = async () => {
    let json = await fetch(RESTAURANT_MENU_LINK + resId);
    let res = await json.json();
    setResInfo(res.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
