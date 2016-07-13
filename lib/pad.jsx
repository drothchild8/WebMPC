const React = require('react');
const ReactHowler = require('react-howler');

const Pad = React.createClass({
	getInitialState: function () {
		return ({
			sound: 'https://s3-us-west-1.amazonaws.com/webmpc/808+Bass+Deepish.wav',
			pressed: false,
			volume: 1.0,
			mute: false
		});
	},
	componentWillMount: function () {
		document.addEventListener("keypress", this.playSound, false);
	},
	playSound: function (e) {
		if (e.keyCode === 97) {
			this.setState({pressed: false});
			this.setState({pressed: true});
		}
	},
	render: function () {
		return (
			<div>
				Press A
				<ReactHowler src={this.state.sound} playing={this.state.pressed} seek={'0'}/>
			</div>
		);
	}
});

module.exports = Pad;
