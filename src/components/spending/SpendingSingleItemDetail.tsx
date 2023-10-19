import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { destroySpending, getOneSpending } from "../../api/fetch";

function LogDetails() {
  const [spendingItem, setSpendingItem] = useState([]);
  let { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getOneSpending(String(id))
      .then((showSingleItem) => {
        setSpendingItem(showSingleItem);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

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
        {log.mistakesWereMadeToday ? <span>⭐️</span> : null} {log.captainName}
      </h3>
      <h5>
        <span>
          <Link to={`/logs/${log.title}`}>{log.captainName}</Link>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {log.title}
      </h5>
      <h6>{log.post}</h6>
      <p>{log.daysSinceLastCrisis}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
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

export default LogDetails;
