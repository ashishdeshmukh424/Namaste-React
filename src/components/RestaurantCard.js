import { CDN_URL } from "../utils/constant";
const RestaurantCard = (restaurant) => {
    const {name,cuisines, avgRating, sla,cloudinaryImageId} = restaurant.restaurant;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg h-[350px] bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg py-4 h-40 w-40" src={`${CDN_URL}/${cloudinaryImageId}`} />
            <h3 className="font-bold ">{name}</h3>
            {/* <h4>{cuisines[0]}</h4> */}
            <h4>{...cuisines.join(", ")}</h4>
            <h4>{avgRating} start</h4>
            <h4>{sla.slaString}</h4>

        </div>
    );
};

export default RestaurantCard;