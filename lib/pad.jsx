const React = require('react');
const ReactHowler = require('react-howler');
const anime = require('animejs');
const Circle = require('./shapes/circles.jsx');

const Pad = React.createClass({
	getInitialState: function () {
		return ({
			sound: [this.props.sound],
			pressed: false,
			volume: 1.0,
			mute: false
		});
	},
	componentWillMount: function () {
		document.addEventListener("keypress", this.playSound, false);
	},
	playSound: function (e) {
		if (e.keyCode === this.props.keymap) {
			this.setState({pressed: false});
			this.setState({pressed: true});
			this.props.flash();
		}
	},
	handleEnd: function () {
		this.setState({pressed: false});
		this.props.flashStop();
	},
	render: function () {
		let style = "off";
		if (this.state.pressed) {
			style = "on"
		}
			anime({
				targets: ('.circle' + this.props.num),
				translateX: '13rem',
				translateY: '20rem',
				scale: {
					value: 2,
					delaly: 150
				},
				direction: 'alternate',
				loop: false,
				duration: 500,
				easing: 'easeInOutExpo'
				}
			);
		return (
			<div className={"pad " + style}>
				<ReactHowler src={this.state.sound} playing={this.state.pressed} seek={'0'} onEnd={this.handleEnd}/>
				<Circle pad={this.props.num} pressed={this.state.pressed}/>
			</div>
		);
	}
});

module.exports = Pad;
