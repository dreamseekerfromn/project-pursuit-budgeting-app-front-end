import { useEffect, useState } from "react"
import { getAllIncome, getAllSpending } from "../../api/fetch";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

/**
 * Home()
 * =========================
 * renders main page w/ total saving and a doughnut chart.
 * 
 * @returns {React.ReactElement}
 */
export default function Home(){
    /** Initializes chartjs for react-chartjs-2 */
    ChartJS.register(ArcElement, Tooltip, Legend);

    /** declare state hooks */
    const [ totalSave, setTotalSave ] = useState(0);
    const [ totalIncome, setTotalIncome ] = useState(0);
    const [ totalSpending, setTotalSpending ] = useState(0);
    const [ loaded, setLoaded ] = useState(false);

    /** initializes basic data structure for the doughnut chart */
    let data = {
        labels: ['Income', 'Spending'],
        datasets: [
            {
                label: 'Total Amount',
                data: [totalIncome, totalSpending],
                backgroundColor: ['rgba(75, 192, 192, 0.2)','rgba(255,99,132,0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            }
        ]
    };

    useEffect(() => {
        setTotalSave(0);
        getAllIncome().then((json) => {
            for(let index of json){
                setTotalIncome((prev)=> prev += index.amount);
                setTotalSave((prev) => prev + index.amount);
            }
          })
          .catch((err)=> {console.error(err)});
        getAllSpending().then((json) => {
            for(let index of json){
                setTotalSpending((prev)=> prev += index.amount);
                setTotalSave((prev) => prev - index.amount);
            }
          })
          .catch((err)=> {console.error(err)});
        data = {
            labels: ['Income', 'Spending'],
            datasets: [
                {
                    label: 'Total Amount',
                    data: [totalIncome, totalSpending],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)','rgba(255,99,132,0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                }
            ]
        }
    },[]);

    useEffect(() => {
        (totalIncome != 0 && totalSpending != 0) ? setLoaded(true) : setLoaded(false);
    },[totalIncome, totalSave, totalSpending]);

    return(
    <div className="container">
        {loaded ? (
            <>
            <h2 style={totalSave > 100 ? {color:"green"} : totalSave <= 100 && totalSave > 0 ? {color:"yellow"} : {color:"red"}}>Current Save : $ {Number(totalSave).toFixed(2)}</h2>
            <Doughnut data={data} />
            </>
        ) : (<span>Loading</span>)}
        
    </div>)
}