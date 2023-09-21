import logo from "../../images/food_app_logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-blue-100 p-2 shadow-lg px-10">
      <div className="w-20">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items ">
        <ul className="flex items-center h-20 m-auto flex-wrap">
          <li className="p-1">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-1">
            <Link to="/contact">Constact Us</Link>
          </li>
          <li className="p-1">
            <Link to="/cart">Cart({cartItems.length} Items)</Link>
          </li>
          <li className="p-1">
            <button
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            >
              {isLoggedIn ? "logout" : "login"}
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
