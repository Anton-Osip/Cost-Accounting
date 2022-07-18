import Card from '../UI/Card'
import CostsFilter from './CostsFilter'
import './Costs.css'
import React, { useState } from 'react'
import CostsList from './CostsList'

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
			<CostsList costs={filteredCosts} />
		</Card>
	)
}

export default Costs
