const anime = require('animejs');

const Circle = function (x, y, options) {
  this.x = x;
  this.y = y;
  this.color = options.color;
  this.radius = anime.random(...options.radius);
  this.distance = options.distance;
};

Circle.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
};

module.exports = Circle;
