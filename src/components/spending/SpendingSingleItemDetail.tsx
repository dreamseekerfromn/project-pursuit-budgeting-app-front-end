import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { destroySpending, getOneSpending } from "../../api/fetch";

/**
 * IncomeSingleItemDetails()
 * =========================================
 * renders income transection detail for single item
 * 
 * @returns {React.ReactElement}
 */
function SpendingSingleItemDetails() {
  const [spendingItem, setSpendingItem] = useState(    {
    id: "",
    date: "",
    sourceTitle: "",
    sourceDescription: "",
    sourceFrom: "",
    amount: 0,
    sourceCategory: 0,
    period: 0,
    misc: {},
  });
  let { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getOneSpending(String(id))
      .then((showSingleItem) => {
        setSpendingItem({...showSingleItem[0]});
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  /**
   * handleDelete()
   * ==========================
   * DELETE the specific item w/ id from the back-end server
   */
  const handleDelete = () => {
    destroySpending(String(id))
      .then(() => {
        console.log(`${id} is deleted successfully from the database`);
        alert(`${id} is deleted successfully from the database`);
        nav("/spending");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <article>
      <h3>
        {spendingItem.sourceTitle}
      </h3>
      <h5>
        <span>
          <Link to={`/spending/date/${spendingItem.date}`}>{spendingItem.date}</Link>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {spendingItem.sourceTitle}
      </h5>
      <h6>Amount: ${spendingItem.amount}</h6>
      <p>Description: {spendingItem.sourceDescription}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/spending`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/spending/${spendingItem.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default SpendingSingleItemDetails;
