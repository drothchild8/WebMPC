# Web MPC

[live link][link]

[link]: https://xrayzx.github.io/WebMPC/

Web MPC is a virtual drum machine with visual choreography.

This app is built with React.js, JavaScript, Canvas, and HTML/CSS. It utilizes Amazon Web Services to host audio samples, which is embedded and pre-buffered with howler.js onto each drum pad.

### Implementation

#### Audio
When the pads mount, an event listener is placed on the document to listen for a `keypress`. Each pad has its has it's own animation. When the associated key is pressed, it's unique animation will be triggered.

```javascript
playSound: function (e) {
  if (e.keyCode === this.props.keymap) {
    this.setState({pressed: false});
    this.setState({pressed: true});
    if (this.props.animate) {
      this.props.animate();
    }
  }
}
```

Triggering a pad sets the `pressed` state to `false` and back to `true`. This allows the pads to be pressed repeatedly without the audio playback completing.

#### Visual
Each circle's radius, distance, and color is dependent on the sound. Brighter sounds (such as high hats) will have a more playful color scheme. While sounds with a shorter decay (quick and sharp) will have small fast animations.

```javascript
const Circle = function (x, y, options) {
  this.x = x;
  this.y = y;
  this.color = options.color[Math.floor(Math.random() * options.color.length)];
  this.radius = anime.random(...options.radius);
  this.distance = options.distance;
};
```
