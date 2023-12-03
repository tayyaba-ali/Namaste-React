import React, { useState } from 'react';
import { restaurantData } from '../Config';
import RestaurantCard from './RestaurantCard';

const SearchBar = () => {
	let myname = 'Tayyaba';
	// const [myName,setName] = useState("Tayyaba")
	const changeNameHandler = () => {
		myname = 'Umra';
		console.log(myname);
		console.log('Hello world!');
	};

	return (
		<div className='searchBar '>
			<input type='text' placeholder='Search' />

			<h1>{myname}</h1>
			<button onClick={changeNameHandler}>Change Name</button>
		</div>
	);
};

const Body = () => {
	return (
		<div className='bodyDiv'>
			<SearchBar />
			<div className='ResDiv'>
				{restaurantData.map((restaurant, i) => (
					<RestaurantCard key={restaurant.data.id} {...restaurant.data} />
				))}
			</div>
		</div>
	);
};

export default Body;
