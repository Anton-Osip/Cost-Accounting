import Card from '../UI/Card'
import CostDate from './CostDate'
import './CostItem.css'

const CostItem = props => {
	let description = props.description

	const changeDescriptionHandler = () => {
		description = 'new Text'
	}

	return (
		<Card className='cost-item'>
			<CostDate date={props.date} />
			<div className='cost-item__description'>
				<h2>{description}</h2>
				<div className='cost-item__price'>${props.amount}</div>
			</div>
			<button onClick={changeDescriptionHandler}>Изменить описание</button>
		</Card>
	)
}

export default CostItem
