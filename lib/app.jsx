const React = require('react');
const Pad = require('./pad.jsx');

const soundBank = {
	hatOpen: 'https://s3-us-west-1.amazonaws.com/webmpc/VEE2+Open+Hihat+015.wav',
	inst4: '',
	fx: 'https://s3-us-west-1.amazonaws.com/webmpc/FX.wav',
	inst6: '',
	hatClosed: 'https://s3-us-west-1.amazonaws.com/webmpc/HiHat+Closed+005+Tight+and+Wide.wav',
	perc1: 'https://s3-us-west-1.amazonaws.com/webmpc/BellyPerc.wav',
	inst1: '',
	inst2: '',
	kick: 'https://s3-us-west-1.amazonaws.com/webmpc/Kick+006+Lexy.wav',
	bass808: 'https://s3-us-west-1.amazonaws.com/webmpc/808+Bass+Deepish.wav',
	clap: 'https://s3-us-west-1.amazonaws.com/webmpc/Clap+010.wav',
	snare: 'https://s3-us-west-1.amazonaws.com/webmpc/Snare+001.wav',
}

const keymaps = [113, 119, 101, 114, 97, 115, 100, 102, 122, 120, 99, 118];

const Splash = require('./shapes/splash.js');

const App = React.createClass({
	getInitialState: function () {
		return ({
			shake: false
		});
	},
	componentWillMount: function () {
		document.getElementById('canvas').style.backgroundColor = 'gray';
		this.splash = new Splash(this.props.canvas, this.props.ctx);
	},
	flash: function () {
		if (this.state.shake) {
			this.flashStop();
			this.setState({shake: true});
		} else {
			this.setState({shake: true});
		}
	},
	flashStop: function () {
		this.setState({shake: false});
	},
	render: function () {
		let pads = [];
		let samples = Object.keys(soundBank);
		samples.forEach((sample, idx) => {
			let pad = (
				<Pad key={sample} name={sample} sound={soundBank[sample]} keymap={keymaps[idx]}/>
			)
			if (sample === "bass808") {
				pad = (
					<Pad key={sample} name={sample} sound={soundBank[sample]} keymap={keymaps[idx]} animate={this.flash} animateStop={this.flashStop}/>
				)
			}
			pads.push(pad);
		})
		let style = this.state.shake ? "animated infinite shake" : '';
		return (
			<div className="parent">
				<div className={"pads-container " + style}>
					{pads}
				</div>
			</div>
		)
	}
});

module.exports = App;
