import notificationIcon from "../../assets/Navbar/notifications.svg";
import dropdownIcon from "../../assets/Navbar/dropdown.svg";
import Overview from "./overview.component";
import Transaction from "./transactions.component";
import Search from "../search.component";

const Payouts = () => {
  return (
    <div className="payouts-container">
      <div className="payouts-nav-container">
        <div className="payouts-text-container">
          <div className="payouts-text">Payouts</div>
          <div className="payouts-sub-text-container">
            <span className="material-symbols-outlined help-symbol">help</span>
            <div className="payouts-sub-text">How it works</div>
          </div>
        </div>
        <div className="payouts-search-container">
          <Search backgroundClass={true}/>
        </div>
        <div className="payouts-nav-right">
          <div className="notifications round">
            <img src={notificationIcon} alt="notifications" />
          </div>
          <div className="dropdown round">
            <img src={dropdownIcon} alt="profile" />
          </div>
        </div>
      </div>

      <Overview />
      <Transaction />
    </div>
  );
};
export default Payouts;
