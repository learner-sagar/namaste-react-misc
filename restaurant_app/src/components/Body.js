import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = async () => {
    setTimeout(() => {
      setRestaurantList(restaurants);
    }, 2000);
  };

  const filterTopRated = () => {
    let filteredRestaurant = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurantList(filteredRestaurant);
  };

  const searchRestaurants = () => {
    let searchedRestaurants = restaurants.filter((restaurant) => {
      return (
        restaurant?.info?.name
          ?.toLocaleLowerCase()
          ?.indexOf(searchText?.toLowerCase()) != -1
      );
    });
    setRestaurantList(searchedRestaurants);
  };

  //conditional rendering
  if (restaurantList.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="form-control search-btn"
            type="button"
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={filterTopRated}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <Link to={`restaurant/${restaurant?.info?.id}`}>
            <RestaurantCard
              restaurant={restaurant?.info}
              key={restaurant?.info?.id}
              link={restaurant?.cta?.link}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
