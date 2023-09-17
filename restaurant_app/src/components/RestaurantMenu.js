import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  });

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

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu</h2>
      <ul>
        {resInfo.cuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ul>
      <h3>{resInfo.costForTwo}</h3>
    </div>
  );
};

export default RestaurantMenu;
