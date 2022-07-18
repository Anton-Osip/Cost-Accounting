import DiagramBar from './DiagramBar'
import './Diagram.css'

const Diagram = props => {
	const dataSetsValue = props.dataSets.map(dataSet => dataSet.value)
	const maxMonthCost = Math.max(...dataSetsValue)

	return (
		<div className='diagram'>
			{props.dataSets.map(dataSet => (
				<DiagramBar
					value={dataSet.value}
					maxValue={maxMonthCost}
					label={dataSet.label}
					key={dataSet.label}
				/>
			))}
		</div>
	)
}
export default Diagram
