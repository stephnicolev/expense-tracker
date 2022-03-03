import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
	const [addExpense, setAddExpense] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData);
		setAddExpense(false);
	};

	const addExpenseHandler = () => {
		setAddExpense(true);
	}

	const cancelAddExpenseHandler = () => {
		setAddExpense(false);
	}

	return (
		<div className='new-expense'>
			{!addExpense && <button onClick={addExpenseHandler}>Add New Expense</button>}
			{addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddExpenseHandler} />}
		</div>
	);
};

export default NewExpense;
