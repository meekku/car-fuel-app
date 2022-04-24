import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
export const Expense = ({ expense }) => {
    const { deleteExpense } = useContext(GlobalContext);

    return (
        <li className="minus">
            {expense.text} <span>${Math.abs(expense.price)}</span><button onClick={() => deleteExpense(expense.id)} className="delete-btn">x</button>
        </li> 
    )
}