import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AllCars = () => {
    const { expenses } = useContext(GlobalContext);

    const amounts = expenses.map(expense => expense.amount);
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Total refueling expenses over all cars</h4>
            <h1>${total}</h1>
        </>
    )
}