
import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddExpense = () => {
    
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const [liters, setLiters] = useState('');
    const [distance, setDistance] = useState('');

    const { addExpense } = useContext(GlobalContext);
    
    const onSubmit = e => {
        
        e.preventDefault();


        const newExpense = {
            id: Math.floor(Math.random() * 100000000),
            text,
            price: Math.abs(+price),
            liters: Math.abs(+liters),
            distance: Math.abs(+distance)
        }

        addExpense(newExpense);
            // Reseting form values
       setText("")
       setPrice("")
       setLiters("")
       setDistance("")
        
    }
    return (
    <>
        <h3>Add new expense</h3>
        <form name = "addExpense" onSubmit={onSubmit}>

            <div className="form-control">
                <label htmlFor="text">Car's name</label>
                <input type="text" name="cname" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." required/>
            </div>

            <div className="form-control">
                <label htmlFor="price">
                    Refueling price
                </label>
                <input type="number" name="cprice" value={price} onChange={(e) => setPrice(e.target.value)}placeholder="Enter amount..." required/>
            </div>

            <div className="form-control">
                <label htmlFor="liters">
                    Amount of liters
                </label>
                <input type="number" value={liters} onChange={(e) => setLiters(e.target.value)}placeholder="Enter amount..." required/>
            </div>

            <div className="form-control">
                <label htmlFor="distance">
                    Distance in kilometers
                </label>
                <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)}placeholder="Enter amount..." required/>
            </div>

            <button className="btn">Add expense</button>
        </form>
    </>
    )
}