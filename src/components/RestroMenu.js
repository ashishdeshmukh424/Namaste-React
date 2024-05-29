import { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResCategory from "./ResCategory";
const RestroMenu = () => {
  const { restroId } = useParams();

  const resInfo = useRestrauntMenu(restroId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card.card.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories accordions */}
      {categories.map((category, index) => (
        <ResCategory
          key={category.card.card.title}
          category={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestroMenu;
