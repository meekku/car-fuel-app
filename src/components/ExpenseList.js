import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Expense } from './Expense';

export const ExpenseList = () => {
    const { expenses } = useContext(GlobalContext);
   
    return (
        <>
            <h3>Refueling History</h3>
            <ul className="list">
                {expenses.map(expense => (<Expense key={expense.id} expense={expense} />))}
            </ul>
        </>
    )
}