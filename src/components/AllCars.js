import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const AllCars = () => {
    const { expenses } = useContext(GlobalContext);
    
    
    const carsCount = expenses.length
    // Liters
    const litersAmount = expenses.map(expense => expense.liters);
    const litersTotal = litersAmount.reduce((acc, item) => (acc += item), 0);
    let litersAverage = 0
    if (carsCount > 0){
        litersAverage = litersTotal / carsCount
        litersAverage.toFixed(2)
    }


    // Price
    const priceAmount = expenses.map(expense => expense.price);
    const priceTotal = priceAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    let priceAverage = 0
    if(carsCount > 0){
        priceAverage = priceTotal / carsCount
        priceAverage.toFixed(2)
    }
 
    // Distance
    const distanceAmount = expenses.map(expense => expense.distance);
    const distanceTotal = distanceAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);
    let distanceAverage = 0 
    if (carsCount > 0){
        distanceAverage = distanceTotal / carsCount
        distanceAverage.toFixed(2)
    
    }
    

    return (
        <>
            <h4>Sum in euros </h4>
            <h1>{priceTotal}€</h1>
            <h4>Consumption in liters </h4>
            <h1>{litersTotal}</h1>
            <h4>Driven kilometers </h4>
            <h1>{distanceTotal} km</h1>
            <h4>Average expenses per 100 km in €</h4>
            <h1>{priceAverage}</h1>
            <h4>Average consumption per 100 km in liters</h4>
            <h1>{litersAverage}</h1>
            <h4>Average distance</h4>
            <h1>{distanceAverage}</h1>
        </>
    )
}