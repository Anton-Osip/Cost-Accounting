import { useState } from 'react'
import CostForm from './CostForm'
import './NewCost.css'

const NewCost = props => {
	const saveCostDataHandler = inputCostData => {
		const CostData = { ...inputCostData, id: Math.random().toString() }
		props.onAddPost(CostData)
	}

	const [showForm, setShowForm] = useState(false)

	const onShowForm = () => {
		setShowForm(true)
	}

	const onUnShowForm = () => {
		setShowForm(false)
	}

	return (
		<div className='new-cost'>
			<CostForm
				onSaveCostData={saveCostDataHandler}
				showForm={showForm}
				onUnShowForm={onUnShowForm}
				onShowForm={onShowForm}
			/>
		</div>
	)
}

export default NewCost
