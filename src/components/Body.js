import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { respData } from "../utils/mockData";
const Body = () => {
  const [restrontList, setRestrontList] = useState(respData);
  return (
    <div className="body">
      <div className="search-container">search</div>
      <button
        onClick={() => {
          const filterRestroList = {};
          filterRestroList.restaurants = restrontList.restaurants.filter(
            (restro) => restro.info.avgRating > 4.5
          );

          setRestrontList(filterRestroList);
        }}
      >
        Top rated Restorant
      </button>
      <div className="restro-container">
        {restrontList.restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurant={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
