import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg m-2 sm:bg-yellow-800 lg:bg-yellow-500">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems.length} Items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              setBtnReact(btnReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
