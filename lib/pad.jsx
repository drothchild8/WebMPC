const React = require('react');
const ReactHowler = require('react-howler');
const Options = require('./shapes/options.js');

const Pad = React.createClass({
	getInitialState: function () {
		this.volume = this.props.name === 'fx' ? 0.6 : 1.0
		return ({
			sound: [this.props.sound],
			pressed: false,
			volume: this.volume,
			mute: false
		});
	},
	componentWillMount: function () {
		document.addEventListener("keypress", this.playSound, false);
		if (this.props.name === "fx") {
			this.volume = 0.6
		} else {
			this.volume = 1.0
		}
	},
	playSound: function (e) {
		if (e.keyCode === this.props.keymap) {
			this.setState({pressed: false});
			this.setState({pressed: true});
			if (this.props.animate) {
				this.props.animate(Options[this.props.name]);
			}
		}
	},
	handleEnd: function () {
		this.setState({pressed: false});
		if (this.props.animateStop) {
			this.props.animateStop();
		}
	},
	render: function () {
		let style = "off";
		if (this.state.pressed) {
			style = "on";
		}
		return (
			<div className={"pad " + style}>
				<ReactHowler src={this.state.sound} playing={this.state.pressed} seek={'0'} onEnd={this.handleEnd} mute={this.state.mute}/>
			</div>
		);
	}
});

module.exports = Pad;
