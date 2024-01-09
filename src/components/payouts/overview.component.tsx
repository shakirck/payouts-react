import PayoutCard from "./payoutcards.component";

const Overview = () => {
  return (
    <div className="overview-container">
      <div className="overview-top">
        <div className="overview-title">Overview</div>
        <div className="overview-sort">
          <select name="" id="" className="overview-sort-dropdown">
            <option value="">Last Month</option>
            <option value="">Last year</option>
            <option value="">Lifetime</option>
          </select>
          <div className="sort-select-arrow">
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </div>
      <div className="overview-bottom">
        <PayoutCard
          text="Next payout"
          orders="40"
          date="today"
          amount="$4959"
        />
        <PayoutCard text="Next payout" orders="40" amount="$4959" />
        <PayoutCard text="Next payout" orders="40" amount="$4959" />
      </div>
    </div>
  );
};

export default Overview;
