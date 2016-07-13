const React = require('react');

const Pad = require('./pad.jsx');

const App = React.createClass({
	render () {
		return (
			<div>
				Hello from the App
				<Pad/>
			</div>
		)
	}
});

module.exports = App;
