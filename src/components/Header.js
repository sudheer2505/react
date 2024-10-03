import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/about">About </Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>Cart</li>
        <li>
          <button
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
