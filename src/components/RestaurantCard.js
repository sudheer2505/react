const RestaurantCard = (props) => {
  const {
    cloudinaryImageId: image,
    name,
    avgRating,
    cuisines,
    sla,
    isOpen,
  } = props.resData;
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div
      className={
        isOpen
          ? "rounded-md m-2 p-2 pb-4 w-[250px] h-auto bg-gray-100 hover:bg-gray-300"
          : "rounded-md m-2 p-2 w-[250px] h-auto bg-gray-2 00 opacity-20 pointer-events-none"
      }
    >
      <img
        className="rounded-md object-cover w-[250px] h-[200px]"
        src={imgUrl + image}
      />
      <div>
        <h3 className="font-bold text-md py-3">{name}</h3>
        <h4 className="truncate">{cuisines?.join(", ")}</h4>
        <div className="flex flex-row">
          <h5>Rating {avgRating}* </h5>
          <span className="pl-1 font-medium">
            <h5> - {sla.slaString}</h5>
          </span>
        </div>
      </div>
    </div>
  );
};

export const TopRatedRestaurant = (Restaurant) => {
  return (props) => {
    return (
      <>
        <label className="text-sm absolute bg-black text-white m-2 px-2 pb-1 rounded-md">
          Top Rated
        </label>
        <Restaurant {...props} />
      </>
    );
  };
};

export default RestaurantCard;
