import { useState } from "react";
import { useNavigate } from "react-router";
import { createIncome, createSpending } from "../../api/fetch";
import { nanoid } from 'nanoid';

enum entryType {
  income = 0,
  spending,
}

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
  const nav = useNavigate();

  const handleTextChange = (event:any) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: event.target.value });
  };

  const handleTextChange2 = (event:any) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: Number(event.target.value) });
  };

  /*
  const handleCheckboxChange = () => {
    setIncomeItem({ ...IncomeItem, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  */

  /** TODO */
  const handleSubmit = (event:any) => {
    event.preventDefault();
    const entrySelected = document.getElementById("in-or-out");
    if(entrySelected.options[entrySelected.selectedIndex].value == 0){
      console.log(entrySelected.options[entrySelected.selectedIndex].value);
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
      <select name="in-or-out" id="in-or-out">
        <option value={entryType.income} selected>Income</option>
        <option value={entryType.spending}>Spending</option>
      </select>
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
