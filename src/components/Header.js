import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <ul>
        <li>Home</li>
        <li>About</li>
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
