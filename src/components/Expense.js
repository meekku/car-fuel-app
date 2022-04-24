import React from "react";

export const Expense = ({ expense }) => {
    const sign = expense.amount < 0 ? '-' : '+';
    return (
        <li className="minus">
            {expense.text} <span>{sign}${Math.abs(expense.amount)}</span><button className="delete-btn">x</button>
        </li> 
    )
}