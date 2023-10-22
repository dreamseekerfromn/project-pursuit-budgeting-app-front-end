import { useEffect, useState } from "react";
import { getAllIncome } from "../../api/fetch.js";
import IncomeSingleItem from "./IncomeSingleItem.js";
import './Income.css';


function Income() {
  const [IncomeItems, setIncomeItems] = useState([
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
      }
  ]);

  useEffect(() => {
    // we need to get data 
    getAllIncome()
      .then((IncomeJson) => {
        setIncomeItems(IncomeJson);
      })
      .catch((err)=> {console.error(err);
  })},[]);

  return (
    <div className="IncomeItems containers">
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {IncomeItems.map((item) => {
              return <IncomeSingleItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Income;
