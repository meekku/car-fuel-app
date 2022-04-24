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

    // Distance
    const distanceAmount = expenses.map(expense => expense.distance);
    const distanceTotal = distanceAmount.reduce((acc, item) => (acc += item), 0);

    return (
        <>
            <h4>Sum in euros </h4>
            <h1>{priceTotal}€</h1>
            <h4>Comsumption in liters </h4>
            <h1>{litersTotal}</h1>
            <h4>Driven kilometers </h4>
            <h1>{distanceTotal} km</h1>
            <h4>Tähän sitten vielä noi keskiarvot?</h4>
        </>
    )
}