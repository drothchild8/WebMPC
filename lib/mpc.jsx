const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./app.jsx');

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	const setCanvasSize = () => {
		canvasEl.width = window.innerWidth;
		canvasEl.height = window.innerHeight;
	};
	setCanvasSize();
	window.addEventListener('resize', function () {
		setCanvasSize();
	});

	const ctx = canvasEl.getContext("2d");

  const root = document.getElementById("root");
  ReactDOM.render(<App canvas={canvasEl} ctx={ctx}/>, root)}
);
