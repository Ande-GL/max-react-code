import React from "react"
import ExpenseItem from "./ExpenseItem"
import "./ExpensesList.css"

const ExpensesList = (props) => {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback">Found NO Expenses</h2>
    }
    return (
        <ul className="expenses-list">
            {props.item.map((expense) => (
                <ExpenseItem
                key={expense.id}
                dataEI={expense.date}
                titleEI={expense.title}
                amountEI={expense.amount}
                />))}
        </ul>
    )

}

export default ExpensesList