import { useState } from 'react'
import './CostForm.css'

const CostForm = () => {
	const [name, setName] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')
	// const [userInput, setUserInput] = useState({
	// 	name: '',
	// 	amount: '',
	// 	date: '',
	// })
	const nameChangeHandler = event => {
		setName(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, name: event.target.value }
		// })
	}
	const amountChangeHandler = event => {
		setAmount(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, amount: event.target.value }
		// })
	}
	const dateChangeHandler = event => {
		setDate(event.target.value)
		// setUserInput(previousState => {
		// 	return { ...previousState, date: event.target.value }
		// })
	}

	return (
		<form>
			<div className='new-cost__controls'>
				<div className='new-cost__control'>
					<label>Название</label>
					<input type='text' onChange={nameChangeHandler} value={name} />
				</div>
				<div className='new-cost__control'>
					<label>Сумма</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						onChange={amountChangeHandler}
						value={amount}
					/>
				</div>
				<div className='new-cost__control'>
					<label>Дата</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={dateChangeHandler}
						value={date}
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
