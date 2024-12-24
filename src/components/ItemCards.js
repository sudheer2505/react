import { useDispatch } from "react-redux";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { addItem } from "../store/cartSlice";
const ItemCards = ({ data }) => {
  const res = useContext(UserContext);
  console.log("context data = ", res, UserContext);
  console.log("props = ", data);
  const cards = data;
  const imgUrl =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-5">
      {cards.map((item) => (
        <div
          className="flex justify-between pb-5 border-b-2"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="text-md">
              {item.card.info.name}
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs pt-3">{item.card.info.description}</div>
          </div>
          <div className="w-3/12 p-3 relative">
            <div className="absolute top-24 left-12">
              <button
                className="bg-black text-white rounded-md p-2 border-1"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              className="w-full h-[100px]"
              src={imgUrl + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
