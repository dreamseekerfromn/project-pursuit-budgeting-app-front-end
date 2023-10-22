import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import { singleItemProp } from "../../interface/interface";

function SpendingSingleItem({ item }: { item: singleItemProp}) {
  return (
    <tr style={{ cursor: "alias" }}>
      <td>
        <Link to={`/spending/${item.id}`}>
          {item["date"]}
        </Link>
      </td>
      <td>
        <Link to={`/spending/${item.id}`}>
          {item["sourceTitle"]}
        </Link>
      </td>
      <td>
        <Link to={`/spending/${item.id}`}>
          {Number(item["amount"]).toFixed(2)}
        </Link>
      </td>
    </tr>
  );
}

export default SpendingSingleItem;
