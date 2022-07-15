import React from 'react';
import { useState } from 'react';
import './WorkerItem-style.css'

const WorkerItem = (props) => {
	const [daysValue, setDaysValue] = useState(props.worker.days);
	const [salaryRateValue, setSalaryRateValue] = useState(props.worker.salaryRate);
	const [salary, setSalary] = useState(() => Math.round(props.worker.days * props.worker.salaryRate));

	return (
		<li className='worker-item'>
			<p className='worker-item-cell'>{props.worker.firstName}</p>
			<p className='worker-item-cell'>{props.worker.lastName}</p>
			<p className='worker-item-cell'>
				<span>Days Worked:</span>
				<input 
					onChange={e => {
						setDaysValue(e.target.value);
						setSalary(Math.round(e.target.value * salaryRateValue));
					}} 
					className='inp' 
					type="number" 
					value={daysValue}/>
			</p>
			<p className='worker-item-cell'>
				<span>Salary Rate:</span>
				<input 
					onChange={e => {
						setSalaryRateValue(e.target.value);
						setSalary(Math.round(e.target.value * daysValue));
					}}
					className='inp' 
					type="number" 
					value={salaryRateValue}/>
			</p>
			<p className='worker-item-cell'>Salary:<span className='salary-span'>{salary}</span></p>
		</li>
	)
}

export default WorkerItem;