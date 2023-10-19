import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface singleItemProp
    {
        id: string,
        date: string,
        sourceTitle: string,
        sourceDescription: string,
        sourceFrom: string,
        amount: number,
        sourceCategory: number,
        period: number,
        misc: any,
      }

function SpendingSingleItem({ item }: { item: singleItemProp}) {
  return (
    <tr>
      <td>
        {item.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <Link to={`/spending/${item["id"]}`}>
          {item["sourceTitle"]}
        </Link>
      </td>
      <td>
        <Link to={`/spending/${item["id"]}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default SpendingSingleItem;
