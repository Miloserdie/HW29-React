import { useState } from 'react';
import './App.css';
import Workerslist from './components/WorkersList';

function App() {
	const [workers, setWorkers] = useState([
		{id: 1, firstName: 'Alex', lastName: 'Discord', days:1, salaryRate: 15},
		{id: 2, firstName: 'Vaniya', lastName: 'Skype', days:111, salaryRate: 30},
		{id: 3, firstName: 'Jeniya', lastName: 'ISQ', days:25, salaryRate: 10},
		{id: 4, firstName: 'Sasha', lastName: 'Tims', days:99, salaryRate: 25},
		{id: 5, firstName: 'Koliya', lastName: 'Zoom', days:888, salaryRate: 55},
	])

	return (
		<section className='salary-table'>
			<h1>Salary Table</h1>
			<Workerslist workers={workers}/>
		</section>
	)
}

export default App;