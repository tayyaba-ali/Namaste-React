const heading = React.createElement('h1', null, 'Hello world');
console.log(heading);
const heading2 = React.createElement(
	'h2',
	{
		id: 'h2',
	},
	'heading 2',
);
const container = React.createElement(
	'div',
	{
		className: 'container',
	},
	[heading, heading2],
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
