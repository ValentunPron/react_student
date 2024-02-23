import React from 'react';
import { Card, Button } from "react-bootstrap";

export const CardModule = (props) => {

	const onClickButton = () => {
		console.log('You chosen:', props.title);

		window.localStorage.setItem('LOCAL_STORE', props.title)
	}

	return (
		<Card>
			<Card.Img variant="top" src={props.image} style={{ maxHeight: 249, width: '100%' }} />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					{props.description}
				</Card.Text>
				<>
					<Card.Text>
						Type: {props.category}
					</Card.Text>
					<div className='d-flex justify-content-between align-items-center'>
						<div className='d-flex align-items-center gap-2'>
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj4bl4ggr-Y32yHbasnSJYk-p2zeso1Pl5g&usqp=CAU" alt="star" width={32} height={32} />
							<span className='fs-4 font-weight-bold'>{props.rating.rate}</span>
						</div>
						<span>Продано: {props.rating.count}</span>
					</div>
				</>
				<Button variant="outline-secondary" onClick={onClickButton}>Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};