// Import stylesheets
import './style.css';

var controller = new ScrollMagic.Controller();

var opaqueHeaderTimeline = new TimelineMax();

opaqueHeaderTimeline.set('#navbar',
  {
    'background-color': 'rgba(0, 42, 58, 0)',
    'padding-top': '20px',
    'padding-bottom': '20px'
  }
).to('#navbar', 1,
  {
    'background-color': 'rgba(0, 42, 58, 1)',
    'padding-top': '10px',
    'padding-bottom': '10px'
  }
);

var opaqueHeaderScene = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: '#fold-1',
  triggerHook: 0
})
  .setTween(opaqueHeaderTimeline)
  // .addIndicators({ name: 'opaqueHeaderScene' })
  .addTo(controller);
