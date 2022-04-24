import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddExpense = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    const { addExpense } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newExpense = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: Math.abs(+amount)
        }

        addExpense(newExpense);
    }

    return (
    <>
        <h3>Add new expense</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive -income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}placeholder="Enter amount..." />
            </div>
            <button className="btn">Add expense</button>
        </form>
    </>
    )
}