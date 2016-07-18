const anime = require('animejs');
const Circle = require('./circle.js');
const Options = require('./options.js');

const Splash = (function (canvas, ctx) {
  const animations = [];

  const setCanvasSize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const distance = 200;

  const createCircles = function (x, y, options) {
    const circles = [];
    for (let i = 0; i < options.qty; i++) {
      const p = new Circle(x, y, options);
      circles.push(p);
    }
    return circles;
  };

  const removeAnimation = function (animation) {
    const index = animations.indexOf(animation);
    if (index > -1) { animations.splice(index, 1); }
  };

  const animateCircles = function (options) {
    setCanvasSize();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const circles = createCircles(x, y, options);
    const circlesAnimation = anime({
      targets: circles,
      x: function(p) { return p.x + anime.random(-p.distance, p.distance); },
      y: function(p) { return p.y + anime.random(-p.distance, p.distance); },
      radius: options.endRadius,
      duration: function () { return anime.random(...options.duration); },
      easing: 'easeOutExpo',
      complete: removeAnimation,
    });
    animations.push(circlesAnimation);
  };

  const mainLoop = anime({
    duration: Infinity,
    update: function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach(function (anim) {
        anim.animatables.forEach(function (animatable) {
          animatable.target.draw(ctx);
        });
      });
    },
  });

  document.addEventListener('keydown', function (e) {
    const key = (e.key);
    if (Object.keys(Options).indexOf(key) > -1) {
      animateCircles(Options[key]);
    }
  }, false);

});

module.exports = Splash;
