import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = restaurant;
  return (
    <div className="shadow-lg w-72 hover:scale-105 duration-500 rounded-br-lg rounded-bl-lg">
      <div>
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food image"
          className="rounded-tr-lg rounded-tl-lg"
        />
      </div>
      <div className="m-3">
        <div className="flex justify-between mb-3">
          <h3 className="restaurant-card-title text-lg font-bold">{name}</h3>
          <h4>⭐ {avgRating}</h4>
        </div>
        <p className="card-couisines pb-6">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
