import walletIcon from "../assets/Navbar/wallet.svg";
const AvailableCredit = () => {
  return (
    <div className="available-credit-container">
      <div className="wallet-icon-container">
        <img src={walletIcon} alt="walletIcons" />
      </div>
      <div className="available-credit-details">
        <div className="available-credit-details-text">Available Credits</div>
        <div className="available-credit-value">323.23</div>
      </div>
    </div>
  );
};
export default AvailableCredit;
