import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AllCarExpenses = () => {
    const { expenses } = useContext(GlobalContext);

    const priceAmount = expenses.map(expense => expense.price);
    const priceTotal = priceAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className ="inc-exp-container">
            <div>
                <h4>Tätä muokataan jotenki et saadaa esim yhen auton tiedot tai jtn entiiä </h4>
                <p className="money minus">${priceTotal}</p>
            </div>
        </div>
    )
}