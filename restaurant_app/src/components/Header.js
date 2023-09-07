import logo from "../../images/food_app_logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Constact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
