import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
    const RestroMenu = () => {
        const {restroId} = useParams();

        const resInfo = useRestrauntMenu(restroId);

        if( resInfo === null ) return <ShimmerUi />

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[2].card.card.info;
        const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
            <h2>My Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - RS.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}

            </ul>
        </div>
    );
}

export default RestroMenu;
