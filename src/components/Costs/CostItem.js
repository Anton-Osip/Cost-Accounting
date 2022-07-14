import Card from '../UI/Card'
import CostDate from './CostDate'
import './CostItem.css'

const CostItem = props => {

	const changeDescription = () => {
		console.log('ghjk')
	}
	
	return (
		<Card className='cost-item'>
			<CostDate date={props.date} />
			<div className='cost-item__description'>
				<h2>{props.description}</h2>
				<div className='cost-item__price'>${props.amount}</div>
			</div>
			<button onClick={changeDescription}>Изменить описание</button>
		</Card>
	)
}

export default CostItem
