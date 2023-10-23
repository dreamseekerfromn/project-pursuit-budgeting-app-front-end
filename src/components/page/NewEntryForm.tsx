import { useState } from "react";
import { useNavigate } from "react-router";
import { createIncome, createSpending } from "../../api/fetch";
import { nanoid } from 'nanoid';
//import { singleItemProp } from "../../interface/interface";
/*
enum entryType {
  income = 0,
  spending,
}
*/
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
}
*/
function NewEntryForm() {
  const [IncomeItem, setIncomeItem] = useState({
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
  const [entryType, setEntryType] = useState(true);
  const nav = useNavigate();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: event.target.value });
  };

  const handleTextChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: Number(event.target.value) });
  };

  const handleCheckboxChange = () => {
    setEntryType((prev)=>!prev);
  };
  

  /** TODO */
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(entryType){
      createIncome(IncomeItem).then(() => {
        console.log("create success");
        nav('/income');
      }).catch((err:any)=>console.error(err));
    }
    else{
      createSpending(IncomeItem).then(() => {
        console.log("create success");
        nav('/spending');
      }).catch((err:any)=>console.error(err));
    }
  };

  return (
    <div className="New">
      <button name="in-or-out" id="in-or-out" onClick={handleCheckboxChange}>
        {entryType ? "Income" : "Spending"}
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          value={IncomeItem.date}
          type="date"
          onChange={handleTextChange}
          placeholder="yyyy-mm-dd"
          required
        />
        <label htmlFor="Item name">Source Title:</label>
        <input
          id="sourceTitle"
          value={IncomeItem.sourceTitle}
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
          value={IncomeItem.sourceFrom}
          placeholder="The source came from..."
          onChange={handleTextChange}
        />
        <label htmlFor="sourceDescription">Source Description:</label>
        <textarea
          id="sourceDescription"
          value={IncomeItem.sourceDescription}
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
          value={IncomeItem.amount}
          onChange={handleTextChange2}
          placeholder="How much?"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default NewEntryForm;
