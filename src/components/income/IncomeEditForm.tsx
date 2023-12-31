import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneIncome, updateIncome } from "../../api/fetch";
import { customInputEventBundle } from "../../interface/interface";

/**
 * IncomeEditForm()
 * ==============================
 * Page to PUT a updated data to income.
 * 
 * @returns {React.ReactElement}
 */
function IncomeEditForm() {
  const params = useParams();
  let { id } = params;
  const [IncomeItem, setIncomeItem] = useState({
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
    getOneIncome(String(id))
      .then((itemData) =>{
        setIncomeItem({...itemData[0]});
      })
      .catch((err) => {
        console.error(err)
      })
  },[id]);

  /**
   * handleTextChange()
   * ========================================
   * change incomeItem state hook whenever input or textarea is changed.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle 
   * @param {customInputEventBundle} event
   */
  const handleTextChange = (event:customInputEventBundle) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: event.target.value });
  };

  /**
   * handleTextChange2()
   * ========================================
   * change incomeItem state hook especially for the amount property.
   * 
   * @typedef {(React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>)} customInputEventBundle
   * @param {customInputEventBundle} event
   */
  const handleTextChange2 = (event:customInputEventBundle) => {
    setIncomeItem({ ...IncomeItem, [event.target.id]: Number(event.target.value) });
  };

  /**
   * handleSubmit()
   * ================================
   * PUT updated data to the back-end.
   * @param {React.ChangeEvent<HTMLFormElement>} event 
   */
  const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(IncomeItem);
    updateIncome(String(id), IncomeItem).then(() => {
      console.log("create success");
      console.log(IncomeItem);
      nav('/Income');
    }).catch((err:any)=>console.error(err));
  };

  return (
    <div className="edit">
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
        <label htmlFor="Item name">Item Name:</label>
        <input
          id="sourceTitle"
          value={IncomeItem.sourceTitle}
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
          value={IncomeItem.sourceFrom}
          placeholder="The source came from..."
          onChange={handleTextChange}
        />
        <label htmlFor="sourceDescription">Description:</label>
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

export default IncomeEditForm;