import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{resInfo.name}</h1>
      <h3 className="font-bold text-xl">Menu</h3>
      <ul>
        {resInfo.cuisines.map((cuisine, index) => (
          <li key={index}>{cuisine}</li>
        ))}
      </ul>
      <h3 className="font-bold">{resInfo.costForTwo}</h3>
    </div>
  );
};

export default RestaurantMenu;
