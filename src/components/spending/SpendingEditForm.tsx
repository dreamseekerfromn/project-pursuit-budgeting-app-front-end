import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneSpending, updateSpending } from "../../api/fetch";

/*
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
}*/

function SpendingEditForm() {
  const params = useParams();
  let { id } = params;
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
        setSpendingItem({...itemData[0]});
      })
      .catch((err) => {
        console.error(err)
      })
  },[id]);

  const handleTextChange = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setSpendingItem({ ...spendingItem, [event.target.id]: event.target.value });
  };

  const handleTextChange2 = (event:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setSpendingItem({ ...spendingItem, [event.target.id]: Number(event.target.value) });
  };


  /*
  const handleCheckboxChange = () => {
    setSpendingItem({ ...spendingItem, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  */

  /** TODO */
  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(spendingItem);
    updateSpending(String(id), spendingItem).then(() => {
      console.log("create success");
      console.log(spendingItem);
      nav('/spending');
    }).catch((err:any)=>console.error(err));
  };

  return (
    <div className="edit">
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
        <label htmlFor="Item name">Item Name:</label>
        <input
          id="sourceTitle"
          value={spendingItem.sourceTitle}
          type="text"
          onChange={handleTextChange}
          placeholder="Item Name"
          required
        />
        <label htmlFor="from">Source From:</label>
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

export default SpendingEditForm;