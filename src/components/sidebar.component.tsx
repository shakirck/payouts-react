import { Link } from "react-router-dom"; // import viteLogo from '/vite.svg'
import logo from "../assets/logo.svg";
import home from "../assets/Navbar/home.svg";
import ordersIcon from "../assets/Navbar/orders.svg";
import productsIcon from "../assets/Navbar/products.svg";
import deliveryIcon from "../assets/Navbar/delivery.svg";
import marketingIcon from "../assets/Navbar/marketing.svg";
import analyticsIcon from "../assets/Navbar/analytics.svg";
import paymentsIcon from "../assets/Navbar/payments.svg";
import toolsIcon from "../assets/Navbar/tools.svg";
import discountsIcon from "../assets/Navbar/discounts.svg";
import audienceIcon from "../assets/Navbar/audience.svg";
import appearanceIcon from "../assets/Navbar/appearance.svg";
import pluginsIcon from "../assets/Navbar/plugins.svg";
import AvailableCredit from "./availablecredit.component";

const Sidebar = () => {
  const data = {
    name: "Nishiyan",
    url: "https://www.google.com",
  };
  return (
    <div className="sidebar">
      <div className="sidebar-start">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <div className="logo-details">
            <p>{data.name}</p>
            <a href={data.url}>visit store</a>
          </div>
        </div>
        <ul className="sidebar-ul">
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={home} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Home</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={ordersIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Orders</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={productsIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Products</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={deliveryIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Delivery</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={marketingIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Marketing</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={analyticsIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Analytics</Link>
            </div>
          </li>
          <li className="sidebar-items active">
            <div className="sidebar-items-icon">
              <img src={paymentsIcon} alt="" />
            </div>
            <div className="sidebar-items-link ">
              <Link to="/payments">Payments</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={toolsIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Tools</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={discountsIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Discounts</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={audienceIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Audience</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={appearanceIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Appearance</Link>
            </div>
          </li>
          <li className="sidebar-items">
            <div className="sidebar-items-icon">
              <img src={pluginsIcon} alt="" />
            </div>
            <div className="sidebar-items-link">
              <Link to="/payments">Plugins</Link>
            </div>
          </li>
        </ul>
      </div>
      <AvailableCredit />
    </div>
  );
};

export default Sidebar;
