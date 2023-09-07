import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = restaurant;
  return (
    <div className="restaurant-card">
      <div className="food-img-container">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="food image"
          className="food-img"
        />
      </div>
      <div className="restaurant-description">
        <h3 className="restaurant-card-title">{name}</h3>
        <h4>⭐ {avgRating}</h4>
      </div>
      <p className="card-couisines">{cuisines.join(", ")}</p>
    </div>
  );
};

export default RestaurantCard;
