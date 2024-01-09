import Search from "../search.component";

const Transaction = () => {
  const transactionvalues = [];
  let startingValue = Math.floor(Math.random() * 100000);
  for (let i = 0; i < 7; i++) {
    const value = {
      orderId: `#${startingValue--}`,
      orderDate: "12/12/2020",
      orderAmount: `₹${(Math.random() * 100000).toFixed(3)}`,
      transactionFees: "$10",
      status: ["successfull", "processing"][
        Math.floor(Math.random() * 2)
      ],
      transactionId: `${Math.floor(Math.random() * 1000000000)}`,
    };
    transactionvalues.push(value);
  }
  return (
    <div className="transactions-container">
      <div className="transactions-title-container">
        <div className="transactions-title-text">Transactions | This Month</div>
      </div>
      <div className="transactions-payouts-refunds-container">
        <button className="btn btn-rounded btn-gray">Payouts (22)</button>
        <button className="btn btn-rounded btn-blue">Refunds (6)</button>
      </div>
      <div className="transactions-search-container">
        <div className="transactions-search-box">
          <Search placeholder="Order ID or transaction ID" />
        </div>
        <div className="transactions-search-right-container">
          <button className="transparent btn sort-btn">
            <div className="sort-btn-text">Sort</div>
            <span className="material-symbols-outlined sort-symbol">
              sync_alt
            </span>
          </button>
          <button className="btn transparent">
            <span className="material-symbols-outlined">download</span>
          </button>
        </div>
      </div>
      <div className="transactions-list-container">
        <div className="transactions-header">
          <ul className="header-values ">
            <li className="transactions-column-header column">Order Id</li>
            <li className="transactions-column-header column">Status</li>
            <li className="transactions-column-header column">
              Transaction ID
            </li>
            <li className="transactions-column-header column">Refund date</li>
            <li className="transactions-column-header column flex-end">Order amount</li>
          </ul>
        </div>
        <div className="transactions-values">
          {transactionvalues.map((value, index) => {
            return (
              <ul className="transactions-row" key={index}>
                <li className="transactions-column column order-id">
                  {value.orderId}
                </li>
                <li className="transactions-column column">
                  <span className="status-circle">
                    <div
                      className={
                        value.status === "successfull"
                          ? "status-green circle"
                          : "status-gray circle"
                      }
                    ></div>{" "}
                  </span>
                  {value.status}
                </li>
                <li className="transactions-column column">
                  {value.transactionId}
                </li>
                <li className="transactions-column column">
                  {value.orderDate}
                </li>
                <li className="transactions-column column order-amount">
                  {value.orderAmount}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Transaction;
