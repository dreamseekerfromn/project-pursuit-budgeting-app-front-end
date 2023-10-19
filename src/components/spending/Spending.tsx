import { useEffect, useState } from "react";
//import Log from "./Log.jsx";
import { getAllSpending } from "../../api/fetch.js";
import SpendingSingleItem from "./SpendingSingleItem.js";

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
      }
  ]);

  useEffect(() => {
    // we need to get data 
    getAllSpending()
      .then((spendingJson) => {
        setSpendingItems(spendingJson);
      })
      .catch((err)=> {console.error(err);
  })},[]);

  return (
    <div className="SpendingItems">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Item Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {spendingItems.map((item) => {
              return <SpendingSingleItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Spending;
