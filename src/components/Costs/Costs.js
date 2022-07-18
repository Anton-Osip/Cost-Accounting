import Card from '../UI/Card'
import CostItem from './CostItem'
import CostsFilter from './CostsFilter'
import './Costs.css'
import React, { useState } from 'react'

const Costs = props => {
	const [selectedYear, setSelectedYear] = useState('2021')
	const yearChangeHandler = year => {
		setSelectedYear(year)
	}

	const filteredCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === selectedYear
	})

	return (
		<Card className='costs'>
			<CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
			{filteredCosts.map(cost => (
				<CostItem
					date={cost.date}
					description={cost.description}
					amount={cost.amount}
					key={cost.id}
				/>
			))}
		</Card>
	)
}

export default Costs
