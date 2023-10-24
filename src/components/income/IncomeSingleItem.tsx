import { Link } from "react-router-dom";
import { singleItemProp } from "../../interface/interface";

/**
 * IncomeSingleItem()
 * =====================================
 * render single table row for income 
 * 
 * @typedef {singleItemProp}
 *  @property {string} id - unique id
 *  @property {string} date - actual date for this item
 *  @property {string} sourceDescription - additional description
 *  @property {string} sourceFrom - this transection was came from...
 *  @property {number} amount - actual amount
 *  @property {number} sourceCategory - unused property
 *  @property {number} period - unused property
 *  @property {object<any>} misc - unused property
 * @param {React.ComponentProps} item - react prop came from its ancestor.
 * @returns {React.ReactElement}
 */
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
