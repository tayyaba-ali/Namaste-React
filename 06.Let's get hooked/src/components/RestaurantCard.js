import {IMG_URL} from "../Config"
const RestaurantCard = ({ cloudinaryImageId, totalRatingsString, name, cuisines }) => {
	return (
		<div className='card'>
			<img src={`${IMG_URL}${cloudinaryImageId}`} alt='biryani' />

			<h2>{name}</h2>
			<h3>{cuisines.join(' ,')}</h3>
			<h4>{totalRatingsString} stars</h4>
		</div>
	);
};
 export default RestaurantCard