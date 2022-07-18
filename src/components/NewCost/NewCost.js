import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'

const NewCost = props => {
	const [isFornVisible, setIsFornVisible] = useState(false)
	const saveCostDataHandler = inputCostData => {
		const CostData = { ...inputCostData, id: Math.random().toString() }
		props.onAddPost(CostData)
		setIsFornVisible(false)
	}

	const inputCostDataHandler = () => {
		setIsFornVisible(true)
	}

	const canselCostHandler = () => {
		setIsFornVisible(false)
	}

	return (
		<div className='new-cost'>
			{!isFornVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
			{isFornVisible && (
				<CostForm onSaveCostData={saveCostDataHandler} onCanselCostHandler={canselCostHandler} />
			)}
		</div>
	)
}

export default NewCost
