
import {Title} from "./Title";

const Header = () => (
	<div className='container'>
		<Title />

		<div>
			<ul className='navbar'>
				<li>Home</li>
				<li>ABout</li>
				<li>Cart</li>
			</ul>
		</div>
	</div>
);

export default Header;