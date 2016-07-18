# Web MPC

[live link][link]

[link]: https://xrayzx.github.io/WebMPC/

Web MPC is a virtual drum machine with visual choreography.

This app is built with React.js, JavaScript, Canvas, and HTML/CSS. It utilizes Amazon Web Services to host audio samples, which is embedded and pre-buffered with howler.js onto each drum pad.

### Implementation

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
