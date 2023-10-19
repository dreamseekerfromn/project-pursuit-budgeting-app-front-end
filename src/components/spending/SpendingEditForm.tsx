import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getOneSpending, updateSpending } from "../../api/fetch";

enum period {
    onetime = 0,
    weekly,
    monthly,
    querterly,
    annually,
}

enum sourceCategory {
    grocery = 0,
    stock,
    trip,
    utility,
    entertainment,
    etc,
}

function SpendingEditForm() {
let { id } = useParams();
  const [spendingItem, setSpendingItem] = useState({
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
  const nav = useNavigate();

  useEffect(() => {
    getOneSpending(String(id))
      .then((itemData) =>{
        setSpendingItem(itemData);
      })
      .catch((err) => {
        console.error(err)
      })
  },[id]);

  const handleTextChange = (event:any) => {
    setSpendingItem({ ...spendingItem, [event.target.id]: event.target.value });
  };

  /*
  const handleCheckboxChange = () => {
    setSpendingItem({ ...spendingItem, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  */

  /** TODO */
  const handleSubmit = (event:any) => {
    event.preventDefault();
    updateSpending(String(id), spendingItem).then(() => {
      console.log("create success");
      nav('/spending');
    }).catch((err:any)=>console.error(err));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Item name">Captain's Name:</label>
        <input
          id="sourceTitle"
          value={spendingItem.sourceTitle}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="sourceFrom"
          type="text"
          required
          value={spendingItem.sourceFrom}
          placeholder="The source came from..."
          onChange={handleTextChange}
        />
        <label htmlFor="sourceDescription">Description:</label>
        <textarea
          id="sourceDescription"
          value={spendingItem.sourceDescription}
          placeholder="Description"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days since the last crisis:</label>
        <input
          id="amount"
          name="amount"
          value={spendingItem.amount}
          onChange={handleTextChange}
          placeholder="How much?"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SpendingEditForm;