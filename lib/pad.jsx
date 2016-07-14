const React = require('react');
const ReactHowler = require('react-howler');

const Pad = React.createClass({
	getInitialState: function () {
		return ({
			sound: this.props.sound,
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
		}
	},
	handleEnd: function () {
		this.setState({pressed: false});
	},
	render: function () {
		let style = "off";
		if (this.state.pressed) {
			style = "on"
		}
		return (
			<div className={"pad " + style}>
				<ReactHowler src={this.state.sound} playing={this.state.pressed} seek={'0'} onEnd={this.handleEnd}/>
			</div>
		);
	}
});

module.exports = Pad;
