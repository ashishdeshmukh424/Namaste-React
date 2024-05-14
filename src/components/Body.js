import { useState, useEffect } from "react";
import RestaurantCard, { VegLabelRestaurantCard } from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
const Body = () => {
  const [restrontList, setRestrontList] = useState([]);
  const [filterRestarant, setFilterRestarant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardVegLable = VegLabelRestaurantCard(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.003354466025122&lng=73.75542607158422&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setRestrontList(
      json.data.cards[1].card.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilterRestarant(
      json.data.cards[1].card.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  return restrontList?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <div className="body">
      <div className="p-4 m-4">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search px-4 py-1 bg-green-100 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filterRestroList = restrontList.filter(
                (restro) => restro.info.avgRating > 4.5
              );

              setFilterRestarant(filterRestroList);
            }}
          >
            Top rated Restorant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterRestarant && filterRestarant?.length != 0 ? (
          filterRestarant.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                {/* if veg: true add label veg restro */}
                {restaurant.info?.veg ? (
                  <RestaurantCardVegLable restaurant={restaurant.info} />
                ) : (
                  <RestaurantCard restaurant={restaurant.info} />
                )}
              </Link>
            );
          })
        ) : (
          <h1>No Restaurant Found</h1>
        )}
      </div>
    </div>
  );
};

export default Body;
