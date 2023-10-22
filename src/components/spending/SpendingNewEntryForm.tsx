import { useState } from "react";
import { useNavigate } from "react-router";
import { createSpending } from "../../api/fetch";
import { nanoid } from 'nanoid';

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

function SpendingNewEntryForm() {
  const [spendingItem, setSpendingItem] = useState({
    id: nanoid(),
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

  const handleTextChange = (event:any) => {
    setSpendingItem({ ...spendingItem, [event.target.id]: event.target.value });
  };

  const handleTextChange2 = (event:any) => {
    setSpendingItem({ ...spendingItem, [event.target.id]: Number(event.target.value) });
  };

  /*
  const handleCheckboxChange = () => {
    setSpendingItem({ ...spendingItem, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  */

  /** TODO */
  const handleSubmit = (event:any) => {
    event.preventDefault();
    createSpending(spendingItem).then(() => {
      console.log("create success");
      nav('/spending');
    }).catch((err:any)=>console.error(err));
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={spendingItem.date}
          type="date"
          onChange={handleTextChange}
          placeholder="yyyy-mm-dd"
          required
        />
        <label htmlFor="Item name">Source Title:</label>
        <input
          id="sourceTitle"
          value={spendingItem.sourceTitle}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <label htmlFor="title">Source From:</label>
        <input
          id="sourceFrom"
          type="text"
          required
          value={spendingItem.sourceFrom}
          placeholder="The source came from..."
          onChange={handleTextChange}
        />
        <label htmlFor="sourceDescription">Source Description:</label>
        <textarea
          id="sourceDescription"
          value={spendingItem.sourceDescription}
          placeholder="Description"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          min="0"
          value={spendingItem.amount}
          onChange={handleTextChange2}
          placeholder="How much?"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SpendingNewEntryForm;
