import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Expense = ({ expense }) => {
    const { deleteExpense } = useContext(GlobalContext);

    return (
        <li className="minus">
            Car name: {expense.text} <br /> 
            Price: {Math.abs(expense.price)}€<br /> Liters: {expense.liters} <br /> Kilometers: {expense.distance}km
            
            <button onClick={() => deleteExpense(expense.id)} className="delete-btn">x</button>
        </li> 
    )
}