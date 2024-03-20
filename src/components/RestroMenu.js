import { useEffect, useState } from "react"
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
    const RestroMenu = () => {
        const [resInfo, setResInfo] = useState(null);
        const {restroId} = useParams();
        console.log('restroId==>>', restroId);
        useEffect (() => {
            fetchMenu();
        },[]);

        const fetchMenu = async () => {
            const data = await fetch(MENU_API + restroId);
            const myMenu = await data.json();

            setResInfo(myMenu.data);
        };
        if( resInfo === null ) return <ShimmerUi />

        const {name, cuisines, costForTwoMessage} = resInfo?.cards[0].card.card.info;
        const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;
        console.log('itemCards==>>', itemCards);
    return (
        <div className="menu-container">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
            <h2>My Menu</h2>
            <ul>
                {/* <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li> */}
                {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - RS.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}

            </ul>
        </div>
    );
}

export default RestroMenu;
