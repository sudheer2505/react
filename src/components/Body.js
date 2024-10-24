import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { TopRatedRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { GET_SWIGGY_DATA } from "../utils/constants";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  updateFilterdData = () => {
    let filterdData = initialData.filter((res) => res.info.avgRating >= 4.4);
    console.log("filter = ", filterdData);
    setListOfRestaurants(filterdData);
  };

  resetData = () => {
    setListOfRestaurants(initialData);
  };

  fetchRestaurantsData = async () => {
    let res = await fetch(GET_SWIGGY_DATA);
    let json = await res.json();
    let data =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("swiggy resp = ", data);
    setInitialData(data);
    setListOfRestaurants(data);
  };

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  searchRestaurants = () => {
    const filterdRest = initialData.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfRestaurants(filterdRest);
  };

  const RestaurantCardTopRated = TopRatedRestaurant(RestaurantCard);

  // conditional rendering
  // if (listOfUsers?.length === 0) {
  //   return <Shimmer />;
  // }

  if (onlineStatus === false) {
    return <h1>Looks you are offline. Please check the internet connection</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-row ml-3">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-gray-200"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search px-2 py-1 my-2 ml-1 font-thin rounded-md bg-blue-700 text-white"
            onClick={searchRestaurants}
          >
            Search
          </button>
        </div>
        <button
          className="px-2 py-1 my-2 ml-2 font-thin rounded-md bg-gray-400 text-white"
          onClick={updateFilterdData}
        >
          Top Rated Restaurant
        </button>
        <button
          className="px-2 py-1 my-2 ml-2 font-thin rounded-md bg-orange-400 text-white"
          onClick={resetData}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap my-3">
        {listOfRestaurants.map((res) => (
          <Link key={res?.info?.id} to={"/restaurantInfo/" + res.info.id}>
            {res.info.avgRating >= 4.4 ? (
              <RestaurantCardTopRated resData={res.info} />
            ) : (
              <RestaurantCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
