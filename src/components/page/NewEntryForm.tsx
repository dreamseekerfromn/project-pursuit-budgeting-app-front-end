import { useState } from "react";
import { useNavigate } from "react-router";
import { createIncome, createSpending } from "../../api/fetch";
import { nanoid } from 'nanoid';
import { customInputEventBundle } from "../../interface/interface";

/**
 * NewEntryForm()
 * ==============================
 * Page to POST a new data to income or spending.
 * 
 * @returns {React.ReactElement}
 */
function NewEntryForm() {
  const [incomeItem, setIncomeItem] = useState({
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

  /**
   * handleTextChange()
   * ========================================
   * change incomeItem state hook whenever input or textarea is changed.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle 
   * @param {customInputEventBundle} event
   */
  const handleTextChange = (event: customInputEventBundle) => {
    setIncomeItem({ ...incomeItem, [event.target.id]: event.target.value });
  };

  /**
   * handleTextChange2()
   * ========================================
   * change incomeItem state hook especially for the amount property.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle
   * @param {customInputEventBundle} event
   */
  const handleTextChange2 = (event: customInputEventBundle) => {
    setIncomeItem({ ...incomeItem, [event.target.id]: Number(event.target.value) });
  };

  /**
   * handleCheckboxChange()
   * ================================
   * clicking a income/spending button will change vice versa.
   */
  const handleCheckboxChange = () => {
    setEntryType((prev)=>!prev);
  };
  
  /**
   * handleSubmit()
   * ================================
   * POST a new data to the back-end.
   * @param {React.ChangeEvent<HTMLFormElement>} event 
   */
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(entryType){
      createIncome(incomeItem).then(() => {
        console.log("create success");
        nav('/income');
      }).catch((err:any)=>console.error(err));
    }
    else{
      createSpending(incomeItem).then(() => {
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
          value={incomeItem.date}
          type="date"
          onChange={handleTextChange}
          placeholder="yyyy-mm-dd"
          required
        />
        <label htmlFor="Item name">Source Title:</label>
        <input
          id="sourceTitle"
          value={incomeItem.sourceTitle}
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
          value={incomeItem.sourceFrom}
          placeholder="The source came from..."
          onChange={handleTextChange}
        />
        <label htmlFor="sourceDescription">Source Description:</label>
        <textarea
          id="sourceDescription"
          value={incomeItem.sourceDescription}
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
          value={incomeItem.amount}
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
