import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AllCarExpenses = () => {
    const { expenses } = useContext(GlobalContext);

    const amounts = expenses.map(expense => expense.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className ="inc-exp-container">
            <div>
                <h4>Total refueling expenses over all cars</h4>
                <p className="money minus">${total}</p>
            </div>
        </div>
    )
}