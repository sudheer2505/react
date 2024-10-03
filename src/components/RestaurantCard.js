const RestaurantCard = (props) => {
  const { cloudinaryImageId: image , name, avgRating, cuisines, sla, isOpen } = props.resData;
  const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className={isOpen ? "card" : 'card disable-card'}>
      <img className="card-image" src={imgUrl+image} />
      <div className="card-body">
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h5>Rating: {avgRating} stars</h5>
        <h5>{sla.slaString} MINS</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
