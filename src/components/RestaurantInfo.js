import { useEffect, useState } from "react";
import { RESTAURANT_MENU_LINK } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuDetails();
  }, []);

  fetchMenuDetails = async () => {
    let json = await fetch(RESTAURANT_MENU_LINK + resId);
    let res = await json.json();
    setResInfo(res.data);
  };

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5].card.card;

  return (
    <div className="menu">
      <h2>{name}</h2>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{item.card.info.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
