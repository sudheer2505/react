import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import ItemCards from "./ItemCards";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("items = ", cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    console.log("clear calling");
    dispatch(clearCart());
  };

  return (
    <>
      <div className="font-bold my-5 p-2 text-center text-3xl">Cart</div>
      <div className="flex justify-center">
        <button
          className="px-3 py-1 rounded-md bg-blue-700 text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h1>Cart is empty. Please add items to the cart</h1>
        )}
        <ItemCards data={cartItems} />
      </div>
    </>
  );
};

export default Cart;
