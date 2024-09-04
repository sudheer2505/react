import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Comments from "./Comments";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfUsers, setListOfUsers] = useState([]);

  updateFilterdData = () => {
    let filterdData = listOfRestaurants.filter((res) => res.rating > 4.7);
    console.log("filter = ", filterdData);
    setListOfRestaurants(filterdData);
  };

  fetChComments = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await res.json();
    setListOfUsers(json);
  };

  useEffect(() => {
    fetChComments();
  }, []);

  if (listOfUsers?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <button className="filter-btn" onClick={updateFilterdData}>
        Filter Data
      </button>
      <div className="cards-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
      <div>
        <Comments userData={listOfUsers}></Comments>
      </div>
    </div>
  );
};

export default Body;
