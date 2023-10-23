import { Link } from "react-router-dom";
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
          {Number(item["amount"]).toFixed(2)}
        </Link>
      </td>
    </tr>
  );
}

export default IncomeSingleItem;
