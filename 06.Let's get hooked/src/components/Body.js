import React, { useState } from 'react';
import { restaurantData } from '../Config';
import RestaurantCard from './RestaurantCard';

const SearchBar = () => {
	// let student = "Tayyaba"
	const [ searchText, setSearchText ] = useState("")
	const [toggle,setToggle]= useState("true")
	const clickHandler = () => {
		if (toggle === 'false') {
			setToggle('true');
		} else {
			setToggle('false');
		}
	}
	return (
		<div className='searchBar '>
			<input type='text' value={ searchText } placeholder='Search' onChange={ (e) => {
				setSearchText(e.target.value);
			}} />
			<button >Search</button>
			<h1>{ toggle }</h1>
			<button onClick={ clickHandler
			}>change toggle</button>
		</div>
	);
};

const Body = () => {
	// const [ restaurantData, setRestaurantData ] = useState(restaurantData)
	
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
