import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Comments from "./Comments";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialData] = useState(resList);
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  updateFilterdData = () => {
    let filterdData = initialData.filter((res) => res.rating > 4.7);
    console.log("filter = ", filterdData);
    setListOfRestaurants(filterdData);
  };

  resetData = () => {
    setListOfRestaurants(initialData);
  };

  fetchRestaurantsData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    let res = await fetch(url);
    let json = await res.json();
    let data =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("swiggy resp = ", data);
    setListOfRestaurants([...data, ...data]); // show more data
  };

  fetChComments = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await res.json();
    setListOfUsers(json);
  };

  useEffect(() => {
    // fetChComments();
    fetchRestaurantsData();
  }, []);

  searchRestaurants = () => {
    const filterdRest = initialData.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfRestaurants(filterdRest);
  };

  // conditional rendering
  // if (listOfUsers?.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={searchRestaurants}>Search</button>
        </div>
        <button className="filter-btn" onClick={updateFilterdData}>
          Top Rated Restaurant
        </button>
        <button onClick={resetData}>Reset</button>
      </div>
      <div className="cards-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res.info} />
        ))}
      </div>
      <div>{/* <Comments userData={listOfUsers}></Comments> */}</div>
    </div>
  );
};

export default Body;
