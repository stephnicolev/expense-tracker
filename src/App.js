import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Rent",
		amount: 1650.00,
		date: new Date(2022, 7, 14),
	},
	{ id: "e2", title: "Groceries", amount: 216.50, date: new Date(2022, 2, 12) },
	{
		id: "e3",
		title: "Electric Bill",
		amount: 85.92,
		date: new Date(2022, 2, 28),
	},
	{
		id: "e4",
		title: "Car Insurance",
		amount: 238.98,
		date: new Date(2022, 5, 12),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = expense => {
		setExpenses(prevExpenses => {
			return [expense, ...prevExpenses]
		});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	return (
		<div>
			<h2 className='app-title'>Expense Tracker</h2>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
