import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './Good-food-logo-design-on-transparent-background-PNG.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// const heading = React.createElement('h1', null, 'Hello world');
// console.log(heading);

// // Without using JSX
// const heading2 = React.createElement(
// 	'h2',
// 	{
// 		key: 'h2',
// 	},
// 	'heading 2 from parcel',
// );
// const heading1 = React.createElement(
// 	'h1',
// 	{
// 		key: 'h2',
// 	},
// 	'heading 2 from parcel',
// );
// const heading3 = React.createElement(
// 	'h3',
// 	{
// 		key: 'h3',
// 	},
// 	'heading 3 from parcel',
// );
// const container = React.createElement(
// 	'div',
// 	{
// 		className: 'title',
// 	},
// 	[heading, heading2,heading3],
// );

// Using JSX
// const nestedHeader = (<div className="title">
//   <h1 key = "h1">Heading 1</h1>
//   <h2 key = "h2"> Heading 1</h2>
//   <h3 key = "h3">Heading 1</h3>
// </div>)

// Functional Component

// child component

// const Child = () => (
// 	<p>
// 		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quibusdam hic adipisci ipsam illum possimus, officiis animi, odio dolorem beatae maxime accusamus, amet inventore autem non velit? Hic, quisquam veniam!
// 	</p>
// )

// const element = <h3>React element</h3>
// const NestedHeader = () => (
// 	<div className='title'>
// 		<Child></Child>
// 		{element}
// 		 <h1 key='h1'>Heading 1</h1>
// 		 <h2 key='h2'> Heading 1</h2>
// 		 <h3 key='h3'>Heading 1</h3>
// 	</div>
// );

// Header Component

const Header = () => (
	<div className='container'>
		<img className='flex-item' width={50} height={150} src={logo} alt='' />
		<div className='searchBar  middle'>
			<input type='text' placeholder='Search' />
		</div>
		<FontAwesomeIcon className='flex-item' style={{ fontSize: '2rem' }} icon={faUser} />
	</div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NestedHeader />);
root.render(<Header />);
