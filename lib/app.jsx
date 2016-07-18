const React = require('react');
const Modal = require('boron/wavemodal');
const Pad = require('./pad.jsx');

const soundBank = require('./soundbank.js');

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
	componentDidMount: function () {
		this.showModal();
	},
	showModal: function () {
		this.refs.modal.show();
	},
	hideModal: function () {
		this.refs.modal.hide();
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
				<Modal ref="modal" className="welcome" modalStyle={{width: 300}} contentStyle={{backgroundColor: '#E4FCF9'}}>
						<h2>Web MPC</h2>
						<div className="body">
							Press any of the following keys
							<br/>
							Q W E R A S D F Z X C V
							<br/>
							<br/>
							<button onClick={this.hideModal} className="animated rubberBand">Continue</button>
						</div>
				</Modal>
			</div>
		)
	}
});

module.exports = App;
