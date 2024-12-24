import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantInfo = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantInfo(resId);

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, avgRating } = resInfo?.cards[2].card.card.info;
  console.log(
    "cardGroupMap?.REGULAR?.cards=",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    itemCategories
  );

  return (
    <div className="w-6/12 p-4 mt-3 mx-auto">
      <div className="">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-md">{cuisines.join(", ")}</div>
      </div>
      {itemCategories?.map((item, index) => (
        <RestaurantCategory
          key={item.card.card.title}
          data={item.card.card}
          showItems={showIndex == index ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
