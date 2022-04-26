import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AllCarExpenses = () => {
    const { expenses } = useContext(GlobalContext);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [estimatedKilometers, setEstimated] = useState('')
    
    const estimated = parseInt(estimatedKilometers)
    estimated.toFixed(2)
    
   
    const onSubmit = e => {
        e.preventDefault();
        let nameValue = document.forms["calculateEstimate"]["cname"].value;
        for (let i = 0; i < expenses.length; i++){
            console.log(expenses[i].text)
            if (nameValue === expenses[i].text) {
                const distancePerLiter =  expenses[i].distance / expenses[i].liters
                const litersPerEuro = expenses[i].price / expenses[i].liters
                const estimatedKilometers = (amount / litersPerEuro) * distancePerLiter
                
                setEstimated(estimatedKilometers)
                return true;
                }
          
        }
        alert("Name " +nameValue +" not found!");
        return false;
    }
    
    
    return (
        <div className ="inc-exp-container">
            <div>
                <h4>Input car's name and amount of money to be tanked <br></br> to calculate estimate kilometers to be driven</h4>
                <form name = "calculateEstimate" onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Car's name</label>
                        <input type="text" name="cname" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter cars name" required />
                        <div className="form-control">
                            <label htmlFor="text">Amount of money</label>
                            <input type="number" name="money" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount of money" required/>
                        </div>
                    </div>
                    <button className="btn">Calculate</button>
                </form>
                <p className='money minus'>{estimated}</p>
            </div>
        </div>
    )
}