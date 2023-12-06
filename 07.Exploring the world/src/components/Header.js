
import { useState } from "react";
import { Title } from "./Title";

// let welcome = "Welcome"


const Header = () => {
	// const [ welcome, setWelcome ] = useState("welcome")
	// console.log("render")
	return(
	<div className='container'>
		<Title />
		{/* {welcome}
		<button onClick={ () => {
		setWelcome("zoom out");
		} }>Change </button> */}

		<div>
			<ul className='navbar'>
				<li>Home</li>
				<li>ABout</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
	)};

export default Header;