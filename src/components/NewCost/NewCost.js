import CostForm from './CostForm'
import './NewCost.css'

const NewCost = props => {
	const saveCostDataHandler = inputCostData => {
		const CostData = { ...inputCostData, id: Math.random().toString() }
		props.onAddPost(CostData)
	}
	return (
		<div className='new-cost'>
			<CostForm onSaveCostData={saveCostDataHandler} />
		</div>
	)
}

export default NewCost
