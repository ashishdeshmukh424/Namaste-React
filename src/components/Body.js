import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { respData } from "../utils/mockData";
import { isEmpty } from "lodash";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
const Body = () => {
  const [restrontList, setRestrontList] = useState([]);
  const [filterRestarant, setFilterRestarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.003354466025122&lng=73.75542607158422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.003354466025122&lng=73.75542607158422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
  console.log('json==>>', json.data);

    setRestrontList(
      json.data.cards[2].card.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilterRestarant(
      json.data.cards[2].card.card?.gridElements?.infoWithStyle.restaurants
    );
  };


  return restrontList?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRestro = restrontList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterRestarant(filterRestro);
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filterRestroList = restrontList.filter(
            (restro) => restro.info.avgRating > 4.5
          );

          setFilterRestarant(filterRestroList);
        }}
      >
        Top rated Restorant
      </button>
      <div className="restro-container">
        {filterRestarant.length != 0 ? (
          filterRestarant.map((restaurant) => {
            console.log('restaurant==>>', restaurant);
            return(
            <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard
              restaurant={restaurant.info}
            /></Link>
          )})
        ) : (
          <h1>No Restaurant Found</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
