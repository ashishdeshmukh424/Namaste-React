import ItemList from "./ItemList";
const ResCategory = ({ category, showItems, setShowIndex }) => {

  const { title, itemCards } = category.card.card;
  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      {/* Accordian */}
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {title} ({itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {/* Body */}
        {/* inside */}
        {showItems && <ItemList itemCards={itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
