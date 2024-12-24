import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems = ", cartItems);

  return (
    <div className="flex flex-row justify-between bg-blue-100">
      <img className="w-24" src={LOGO_URL} />
      <ul className="flex my-3">
        <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="p-4"><Link to="/">Home </Link></li>
        <li className="p-4"><Link to="/about">About </Link></li>
        <li className="p-4"><Link to="/contact">Contact</Link></li>
        <li className="p-4 font-bold">Cart ({cartItems?.length} items)</li>
        <li className="p-4">
          <button className="px-3 py-1 font-thin rounded-md bg-blue-700 text-white"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
        <li className="p-4 font-bold">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
