import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const { name, cuisines, costForTwo } = restaurants.find(
          (restaurant) => {
            return restaurant.info.id == resId;
          }
        ).info;
        setResInfo({
          name,
          cuisines,
          costForTwo,
        });
        resolve();
      }, 1000);
    });
  };
  return resInfo;
};

export default useRestaurantMenu;
