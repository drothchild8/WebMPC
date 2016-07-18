const React = require('react');
const Pad = require('./pad.jsx');

const soundBank = {
	hatOpen: 'https://s3-us-west-1.amazonaws.com/webmpc/HiHat+Open+003.wav',
	hatOpen2: 'https://s3-us-west-1.amazonaws.com/webmpc/ride.wav',
	flextone: 'https://s3-us-west-1.amazonaws.com/webmpc/Flexatone2OD+Drums1DOTcom.wav',
	chime: 'https://s3-us-west-1.amazonaws.com/webmpc/Chimes1OD+Drums1DOTcom.wav',
	hatClosed: 'https://s3-us-west-1.amazonaws.com/webmpc/HiHat+Closed+005+Tight+and+Wide.wav',
	perc1: 'https://s3-us-west-1.amazonaws.com/webmpc/BellyPerc.wav',
	aye: 'https://s3-us-west-1.amazonaws.com/webmpc/LexLugerVox.wav',
	shell: 'https://s3-us-west-1.amazonaws.com/webmpc/shells.wav',
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
		document.getElementById('canvas').style.backgroundColor = '#0b203c';
		this.splash = new Splash(this.props.canvas, this.props.ctx);
	},
	shake: function () {
		if (!this.state.shake) {
			this.setState({shake: true});
		}
	},
	shakeStop: function () {
		this.setState({shake: false});
	},
	render: function () {
		let pads = [];
		let samples = Object.keys(soundBank);
		samples.forEach((sample, idx) => {
			let volume = sample === "fx" ? 0.1 : 1.0;
			let pad = (
				<Pad key={sample} name={sample} sound={soundBank[sample]} keymap={keymaps[idx]} volume={volume}/>
			)
			if (sample === "bass808") {
				pad = (
					<Pad key={sample} name={sample} sound={soundBank[sample]} keymap={keymaps[idx]}  volume={volume} animate={this.shake} animateStop={this.shakeStop}/>
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
