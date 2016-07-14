const React = require('react');

const Circle = React.createClass({
	getInitialState: function () {
		return ({
			amount: 2
		})
	},
	render: function () {
		let circles = [];
		for (let i = 0; i < this.state.amount; i++) {
			circles.push(<div className={"circle" + this.props.pad} key={i}></div>)
		}
		return (
			<div className="circle-container">
			{circles}
			</div>
		)
	}
});

module.exports = Circle;
