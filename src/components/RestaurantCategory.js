import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
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

      {showDiv && <ItemCards data={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
