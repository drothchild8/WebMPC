const React = require('react');

const Pad = require('./pad.jsx');

const soundBank = {
	kick: 'https://s3-us-west-1.amazonaws.com/webmpc/Kick+006+Lexy.wav',
	bass808: 'https://s3-us-west-1.amazonaws.com/webmpc/808+Bass+Deepish.wav',
	clap: 'https://s3-us-west-1.amazonaws.com/webmpc/Clap+010.wav',
	snare: 'https://s3-us-west-1.amazonaws.com/webmpc/Snare+001.wav',
	hatClosed: 'https://s3-us-west-1.amazonaws.com/webmpc/HiHat+Closed+005+Tight+and+Wide.wav',
	perc1: 'https://s3-us-west-1.amazonaws.com/webmpc/BellyPerc.wav',
	inst1: '',
	inst2: '',
	inst3: '',
	inst4: '',
	inst5: '',
	inst6: ''
}

const keymaps = [122, 120, 99, 118, 97, 115, 100, 102, 113, 119, 101, 114];

let frame = 100000;

const App = React.createClass({
	getInitialState: function () {
		return ({
			shake: false
		});
	},
	componentWillMount: function () {
		document.getElementById('canvas').style.backgroundColor = 'gray';
	},
	flash: function () {
		if (this.state.shake) {
			return;
		} else {
			this.setState({shake: true});
		}
	},
	flashStop: function () {
		this.setState({shake: false});
		frame = 100000;
	},
	render: function () {
		let pads = [];
		let samples = Object.keys(soundBank);
		samples.forEach((sample, idx) => {
			let pad = (
				<Pad key={sample} num={idx} sound={soundBank[sample]} keymap={keymaps[idx]}/>
			)
			if (sample === "bass808") {
				pad = (
					<Pad key={sample} num={idx} sound={soundBank[sample]} keymap={keymaps[idx]} flash={this.flash} flashStop={this.flashStop}/>
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
