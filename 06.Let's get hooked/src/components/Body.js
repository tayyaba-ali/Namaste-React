import React, { useState } from 'react';
import { restaurantData } from '../Config';
import RestaurantCard from './RestaurantCard';

const filterData = (userValue, searchingData) => {
	const filteredData = searchingData.filter((restaurant) => {
		return restaurant.data.name.includes(userValue);
	});
	return filteredData;
};

const SearchBar = ({ restaurants, UIsetter }) => {
	console.log(restaurants, UIsetter);
	const [searchText, setSearchText] = useState('');

	return (
		<div className='searchBar '>
			<input
				type='text'
				value={searchText}
				placeholder='Search'
				onChange={(e) => {
					setSearchText(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					const finalData = filterData(searchText, restaurants);
					console.log(finalData);
					UIsetter(finalData);
				}}>
				Search
			</button>
		</div>
	);
};

const Body = () => {
	const [restaurants, setRestaurants] = useState(restaurantData);

	return (
		<div className='bodyDiv'>
			<SearchBar restaurants={restaurants} UIsetter={setRestaurants} />
			<div className='ResDiv'>
				{restaurants.map((restaurant, i) => (
					<RestaurantCard key={restaurant.data.id} {...restaurant.data} />
				))}
			</div>
		</div>
	);
};

export default Body;
