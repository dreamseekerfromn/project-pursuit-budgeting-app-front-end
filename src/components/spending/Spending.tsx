import { useEffect, useState } from "react";
import { getAllSpending } from "../../api/fetch.js";
import SpendingSingleItem from "./SpendingSingleItem.js";
import "./Spending.css";
import "../../assets/styleIndex.css"

/**
 * Spending()
 * ==============================
 * render entire table for all spending transections
 *
 * @returns {React.ReactElement}
 */
function Spending() {
  const [spendingItems, setSpendingItems] = useState([
    {
      id: "",
      date: "",
      sourceTitle: "",
      sourceDescription: "",
      sourceFrom: "",
      amount: 0,
      sourceCategory: 0,
      period: 0,
      misc: {},
    },
  ]);

  useEffect(() => {
    // we need to get data
    getAllSpending()
      .then((spendingJson) => {
        setSpendingItems(spendingJson);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="SpendingItems container">
      {spendingItems.length > 0 ? (
        <section className="index-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Item Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="spending-index">
              {spendingItems.map((item) => {
                return <SpendingSingleItem key={item.id} item={item} />;
              })}
            </tbody>
          </table>
        </section>
      ) : (
        <span>loading</span>
      )}
    </div>
  );
}

export default Spending;
