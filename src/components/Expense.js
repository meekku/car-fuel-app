import React from "react";

export const Expense = ({ expenses }) => {
    return (
        <li className="minus">
            {expenses.text} <span>-$400</span><button className="delete-btn">x</button>
        </li> 
    )
}