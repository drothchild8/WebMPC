const React = require('react');
const ReactHowler = require('react-howler');

const Pad = React.createClass({
	getInitialState: function () {
		return ({
			sound: [this.props.sound],
			pressed: false,
			volume: this.props.volume,
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
			if (this.props.animate) {
				this.props.animate();
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
			style = "on animated infinite pulse";
		}
		return (
			<div className={"pad " + style}>
				<ReactHowler src={this.state.sound} playing={this.state.pressed} seek={'0'} onEnd={this.handleEnd} mute={this.state.mute}/>
			</div>
		);
	}
});

module.exports = Pad;
