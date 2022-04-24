import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
    const [text, setText] = useState('');
    const [price, setPrice] = useState('');
    const [liters, setLiters] = useState('');

    const { addExpense } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newExpense = {
            id: Math.floor(Math.random() * 100000000),
            text,
            price: Math.abs(+price),
            liters: Math.abs(+liters)
        }

        addExpense(newExpense);
    }

    return (
    <>
        <h3>Add new expense</h3>
        <form onSubmit={onSubmit}>

            <div className="form-control">
                <label htmlFor="text">Car's name</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>

            <div className="form-control">
                <label htmlFor="price">
                    Refueling price
                </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}placeholder="Enter amount..." />
            </div>

            <div className="form-control">
                <label htmlFor="liters">
                    Amount of liters
                </label>
                <input type="number" value={liters} onChange={(e) => setLiters(e.target.value)}placeholder="Enter amount..." />
            </div>


            <button className="btn">Add expense</button>
        </form>
    </>
    )
}