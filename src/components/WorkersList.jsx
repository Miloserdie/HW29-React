import React from 'react';
import WorkerItem from './WorkerItem'; 

const Workerslist = ({workers}) => {
	return (
		<ul>
			{workers.map(worker => 
				<WorkerItem worker={worker} key={worker.id}/>
			)}
		</ul>
	)
}

export default Workerslist;