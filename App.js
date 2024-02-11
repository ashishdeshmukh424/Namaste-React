import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resName,resItem}) => {
    return (
        <div className="restro-card">
            <img className="restro-card-logo" src="https://th.bing.com/th?id=OIP.7AAjFoxeiR7aaw4w0xR8YwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
            <h3>{resName}</h3>
            <h4>{resItem}</h4>
            <h4>4.4 start</h4>
            <h4>30 min</h4>

        </div>
    );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">search</div>
      <div className="restro-container">
        <RestaurantCard resName="City Pride" resItem="Biryani, Chinies"/>
        <RestaurantCard resName="KFC" resItem="Burger"/>
      </div>
    </div>
  );
};
const AppData = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppData />);
