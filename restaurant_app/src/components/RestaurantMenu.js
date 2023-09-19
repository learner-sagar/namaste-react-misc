import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const dispatch = useDispatch();
  const handleAddItem = (cuisine) => {
    dispatch(addItem(cuisine));
  };
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold text-2xl">{resInfo.name}</h1>
      <h3 className="font-bold text-xl">Menu</h3>
      <ul>
        {resInfo.cuisines.map((cuisine, index) => (
          <div key={index} className="flex justify-center w-auto">
            <li className="flex justify-between w-72 my-2">
              <span className="m-2">{cuisine} </span>
              <button
                className="bg-slate-600 rounded-lg px-3"
                onClick={() => handleAddItem(cuisine)}
              >
                add +
              </button>
            </li>
          </div>
        ))}
      </ul>
      <h3 className="font-bold">{resInfo.costForTwo}</h3>
    </div>
  );
};

export default RestaurantMenu;
