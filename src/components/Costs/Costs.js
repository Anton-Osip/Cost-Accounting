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
	return (
		<Card className='costs'>
			<CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
			{props.costs.map(cost => {
				if (cost.date.getFullYear() === Number(selectedYear)) {
					return (
						<CostItem
							date={cost.date}
							description={cost.description}
							amount={cost.amount}
							key={cost.id}
						/>
					)
				}
			})}
		</Card>
	)
}

export default Costs
