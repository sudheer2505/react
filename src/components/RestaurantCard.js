const RestaurantCard = (props) => {
  const { image, name, tags, prepTimeMinutes, rating } = props.resData;
  return (
    <div className="card">
      <img className="card-image" src={image} />
      <div className="card-body">
        <h3>{name}</h3>
        <h4>{tags?.join(", ")}</h4>
        <h5>Rating: {rating} stars</h5>
        <h5>{prepTimeMinutes} MINS</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
