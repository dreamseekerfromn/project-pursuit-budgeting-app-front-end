import { useEffect, useState } from "react";
import { getAllIncome } from "../../api/fetch.js";
import IncomeSingleItem from "./IncomeSingleItem.js";
import "./Income.css";
import "../../assets/styleIndex.css";

/**
 * Income()
 * ==============================
 * render entire table for all income transections
 *
 * @returns {React.ReactElement}
 */
function Income() {
  const [incomeItems, setIncomeItems] = useState([
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
    getAllIncome()
      .then((IncomeJson) => {
        console.log(IncomeJson);
        setIncomeItems(IncomeJson);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="IncomeItems containers">
      {incomeItems.length != 0 ? (
        <section className="index-wrapper">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Item Title</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {incomeItems.map((item) => {
                return <IncomeSingleItem key={item.id} item={item} />;
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

export default Income;
