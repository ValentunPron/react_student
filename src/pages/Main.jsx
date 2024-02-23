import React from 'react'
import { CardModule } from '../component';

export const Main = () => {
	const [date, setDate] = React.useState([]);

	React.useEffect(() => {
		fetch('./db.json')
			.then(response => response.json())
			.then((date) => setDate(date));
	}, [])

	return (
		<div className='row gap-3 d-flex justify-content-between p-5'>
			{
				date.map((product) => (
					<div className='col-12 col-lg-3'>
						<CardModule {...product} key={`${product.title}_${product.id}`} />
					</div>
				))
			}
		</div>
	)
}
