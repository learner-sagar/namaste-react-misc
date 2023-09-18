import { useEffect, useState } from "react";
import { restaurants } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = async () => {
    setTimeout(() => {
      if (onlineStatus) {
        console.log("worked");
        setRestaurantList(restaurants);
      }
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

  if (!onlineStatus) {
    return (
      <h1>Looks like you are offline please check your internet connection</h1>
    );
  }

  return (
    <div className="mx-20">
      <div className="flex items-center justify-between my-4">
        <div className="search flex">
          <input
            className="border border-solid border-blue-100 px-2 rounded-bl-md rounded-tl-md"
            type="search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className=" bg-blue-300 hover:bg-blue-100 px-2 py-1 rounded-br-md rounded-tr-md"
            type="button"
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="bg-blue-300 hover:bg-blue-100 px-2 py-1 rounded-md"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-flow-col-4 h-auto gap-20 mt-16">
        {restaurantList.map((restaurant) => (
          <Link
            to={`restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted
                restaurant={restaurant?.info}
                link={restaurant?.cta?.link}
              />
            ) : (
              <RestaurantCard
                restaurant={restaurant?.info}
                link={restaurant?.cta?.link}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
