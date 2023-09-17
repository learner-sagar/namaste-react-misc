import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
