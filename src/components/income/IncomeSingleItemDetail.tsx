import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { destroyIncome, getOneIncome } from "../../api/fetch";

function IncomeSingleItemDetails() {
  const [IncomeItem, setIncomeItem] = useState(    {
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
    getOneIncome(String(id))
      .then((showSingleItem:any) => {
        setIncomeItem({...showSingleItem[0]});
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleDelete = () => {
    destroyIncome(String(id))
      .then(() => {
        console.log(`${id} is deleted successfully from the database`);
        alert(`${id} is deleted successfully from the database`);
        nav("/Income");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <article>
      <h3>
        {IncomeItem.sourceTitle}
      </h3>
      <h5>
        <span>
          <Link to={`/Income/date/${IncomeItem.date}`}>{IncomeItem.date}</Link>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {IncomeItem.sourceTitle}
      </h5>
      <h6>{IncomeItem.amount}</h6>
      <p>{IncomeItem.sourceDescription}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/Income`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/Income/${IncomeItem.id}/edit`}>
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

export default IncomeSingleItemDetails;
