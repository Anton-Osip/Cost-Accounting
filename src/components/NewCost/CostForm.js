import { useState } from 'react'
import './CostForm.css'

const CostForm = props => {
	const [inputName, setInputName] = useState('')
	const [inputAmount, setInputAmount] = useState('')
	const [inputDate, setInputDate] = useState('')
	// const [userInput, setUserInput] = useState({
	// 	name: '',
	// 	amount: '',
	// 	date: '',
	// })
	const nameChangeHandler = event => {
		setInputName(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, name: event.target.value }
		// })
	}
	const amountChangeHandler = event => {
		setInputAmount(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, amount: event.target.value }
		// })
	}
	const dateChangeHandler = event => {
		setInputDate(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, date: event.target.value }
		// })
	}

	const submitHandler = event => {
		event.preventDefault()
		const costDate = {
			name: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		}
		props.onSaveCostData(costDate)

		setInputName('')
		setInputAmount('')
		setInputDate('')
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input type='text' onChange={nameChangeHandler} value={inputName} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={inputAmount}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
						value={inputDate}
					/>
				</div>
				<div className='new-cost__actions'>
					<button type='submit'>Добавить расход</button>
				</div>
			</div>
		</form>
	)
}

export default CostForm
