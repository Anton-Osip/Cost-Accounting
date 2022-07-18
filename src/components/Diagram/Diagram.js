import DiagramBar from './DiagramBar'
import './Diagram.css'

const Diagram = props => {
	return (
		<div className='diagram'>
			{props.dataSets.map(dataSet => (
				<DiagramBar
					value={dataSet.value}
					maxValue={null}
					label={dataSet.label}
					key={dataSet.label}
				/>
			))}
		</div>
	)
}
export default Diagram
