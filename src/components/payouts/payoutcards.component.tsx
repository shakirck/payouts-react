const PayoutCard = (props: PayoutCardProps) => {
  const { text, amount, orders, date } = props;

  const cardClass = date
    ? "payout-blue-card next-payout-container"
    : "next-payout-container card";
  return (
    <div className="payout-card">
      <div className={cardClass}>
        <div className="next-payout-top">
          <div className="next-payout-text">{text}
            <span className="material-symbols-outlined help-symbol">help</span>
          </div>
          <div className="next-payout-amount-container">
            <div className="next-payout-amount">{amount}</div>
            <div className="next-payout-orders">
              {" "}
              <a href="#"> {orders} Orders</a>{" "}

              {date && (
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              )
              }

              {
                !date && (
                  <span className="material-symbols-outlined order-arrow">
                    arrow_forward_ios
                  </span>
                )
              }
            </div>
          </div>
        </div>
        {date && (
          <div className="next-payout-footer">
            <div className="next-payout-date">Next Payout date</div>
            <div>Today 4:00 PM</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayoutCard;

type PayoutCardProps = {
  text: string;
  amount: string;
  orders: string;
  date?: string;
};
