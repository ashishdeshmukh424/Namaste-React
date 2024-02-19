import { CDN_URL } from "../utils/constant";
const RestaurantCard = (restaurant) => {
    const {name,cuisines, avgRating, sla,cloudinaryImageId} = restaurant.restaurant;
    return (
        <div className="restro-card">
            <img className="restro-card-logo" src={`${CDN_URL}/${cloudinaryImageId}`} />
            <h3>{name}</h3>
            {/* <h4>{cuisines[0]}</h4> */}
            <h4>{...cuisines.join(", ")}</h4>
            <h4>{avgRating} start</h4>
            <h4>{sla.slaString}</h4>

        </div>
    );
};

export default RestaurantCard;