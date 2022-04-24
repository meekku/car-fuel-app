import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AllCars = () => {
    const { expenses } = useContext(GlobalContext);

    // Liters
    const litersAmount = expenses.map(expense => expense.liters);
    const litersTotal = litersAmount.reduce((acc, item) => (acc += item), 0);

    // Price
    const priceAmount = expenses.map(expense => expense.price);
    const priceTotal = priceAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Total sum in euros </h4>
            <h1>{priceTotal}€</h1>
            <h4>Total comsumption in liters </h4>
            <h1>{litersTotal}</h1>
        </>
    )
}