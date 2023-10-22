import { useEffect, useState } from "react"
import { getAllIncome, getAllSpending } from "../../api/fetch";

export default function Home(){
    const [totalSave, setTotalSave] = useState(0);
    useEffect(() => {
        setTotalSave(0);
        getAllIncome().then((json) => {
            for(let index of json){
                setTotalSave((prev) => prev + index.amount);
            }
          })
          .catch((err)=> {console.error(err)});
        getAllSpending().then((json) => {
            for(let index of json){
                //console.log(index.amount)
                setTotalSave((prev) => prev - index.amount);
            }
          })
          .catch((err)=> {console.error(err)});
        console.log(totalSave);
    },[]);

    return(
    <div>
        <h2 style={totalSave > 100 ? {color:"green"} : totalSave <= 100 && totalSave > 0 ? {color:"yellow"} : {color:"red"}}>Current Save : $ {totalSave}</h2>
    </div>)
}