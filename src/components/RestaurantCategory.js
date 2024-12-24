import { useContext } from "react";
import UserContext from "../utils/UserContext";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(null);
  };

  return (
    <div className="bg-gray-50 mb-5">
      <div
        className="font-bold flex justify-between p-3 cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span className="">🔽</span>
      </div>

      {showItems && <ItemCards data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
