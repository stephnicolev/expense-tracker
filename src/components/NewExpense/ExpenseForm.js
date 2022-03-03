import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// Managing Multiple States Separately
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Combined Multiple States Approach //
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		// Not performed instantly if using a lot of state updates at same time, therefore could be depending on outdated/incorrect state updates
		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value,
		// })

		// setUserInput((prevState) => {
		// guarantees latest state keeping all scheduled state updates in mind (if using multiple state manage approach)
		// 	return { ...prevState, enteredTitle: event.target.value};
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value,
		// })
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);

		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value,	
		// })
		
	};

	const submitHandler = (event) => {
		// Page will not reload when req is sent
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		};

		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				{/* Title */}
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text'
					value={enteredTitle}
					onChange={titleChangeHandler} />
				</div>

				{/* Amount */}
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>

				{/* Date */}
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2018-01-01'
						max='2025-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			{/* Button */}
			<div className='new-expense__actions'>
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
