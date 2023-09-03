import React from "react";
import ReactDom from "react-dom/client";
import logo from "./images/food_app_logo.png";
import foodImg1 from "./images/food1.jpg";
import foodImg2 from "./images/food2.jpg";
import foodImg3 from "./images/food3.jpg";
import foodImg4 from "./images/food4.jpg";
import { restaurants } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Constact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = restaurant;
  return (
    <div className="restaurant-card">
      <div className="food-img-container">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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
const Body = () => {
  return (
    <div className="body">
      <div className="restaurant-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant?.info}
            key={restaurant?.info?.id}
          />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
