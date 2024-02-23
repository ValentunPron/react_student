import React from 'react'

export const Favorite = () => {
	let cards = window.localStorage.getItem('LOCAL_STORE');
	return (
		<div>
			<h1>Favourite</h1>
			<p>{cards}</p>
		</div>
	)
}
