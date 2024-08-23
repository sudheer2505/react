import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  updateFilterdData = () => {
    let filterdData = listOfRestaurants.filter((res) => res.rating > 4.7);
    console.log("filter = ", filterdData);
    setListOfRestaurants(filterdData);
  };

  return (
    <div className="body">
      <button className="filter-btn" onClick={updateFilterdData}>Filter Data</button>
      <div className="cards-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
