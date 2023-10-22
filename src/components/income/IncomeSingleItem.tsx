import { Link } from "react-router-dom";
//import { useState, useEffect } from "react";
import { singleItemProp } from "../../interface/interface";

function IncomeSingleItem({ item }: { item: singleItemProp}) {
  return (
    <tr style={{ cursor: "alias" }}>
      <td>
        <Link to={`/Income/${item.id}`}>
          {item["date"]}
        </Link>
      </td>
      <td>
        <Link to={`/Income/${item.id}`}>
          {item["sourceTitle"]}
        </Link>
      </td>
      <td>
        <Link to={`/Income/${item.id}`}>
          {item["amount"]}
        </Link>
      </td>
    </tr>
  );
}

export default IncomeSingleItem;
