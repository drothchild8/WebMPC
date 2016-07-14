const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./app.jsx');

document.addEventListener("DOMContentLoaded", function () {
	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.width = window.innerWidth;
	canvasEl.height = window.innerHeight;
	const ctx = canvasEl.getContext("2d");

  const root = document.getElementById("root");
  ReactDOM.render(<App ctx={ctx}/>, root)}
);
