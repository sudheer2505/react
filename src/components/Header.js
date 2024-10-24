import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
 const [btnName, setBtnName] = useState("Login");
 const onlineStatus = useOnlineStatus();
  return (
    <div className="flex flex-row justify-between bg-blue-100">
      <img className="w-24" src={LOGO_URL} />
      <ul className="flex my-3">
        <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="p-4"><Link to="/">Home </Link></li>
        <li className="p-4"><Link to="/about">About </Link></li>
        <li className="p-4"><Link to="/contact">Contact</Link></li>
        <li className="p-4">Cart</li>
        <li className="p-4">
          <button className="px-3 py-1 font-thin rounded-md bg-blue-700 text-white"
            onClick={() => {
              btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
