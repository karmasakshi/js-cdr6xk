// Import stylesheets
import './style.css';

var controller = new ScrollMagic.Controller();

// ---

var opaqueHeaderTimeline = new TimelineMax();

opaqueHeaderTimeline
  .set('#navbar',
    {
      'background-color': 'none'
    }
  ).to('#navbar', 1,
    {
      'background-color': 'rgb(0, 42, 58)'
    }
  ).set('#logo',
    {
      'width': '240px'
    }
  ).to('#logo', 1,
    {
      'width': '180px'
    }
  );

var opaqueHeaderScene = new ScrollMagic.Scene({
  duration: '100%',
  // offset: '120px',
  triggerElement: '#fold-1',
  triggerHook: 0
})
  .setTween(opaqueHeaderTimeline)
  // .addIndicators({ name: 'opaqueHeaderScene' })
  .addTo(controller);

// ---

var transformHeaderTimeline = new TimelineMax();

transformHeaderTimeline
  .set('#hero-title',
    {
      'font-size': '24px'
    }
  ).to('#hero-title', 1,
    {
      'font-size': '96px'
    }
  )
  .set('#hero-title-container',
    {
      'y': 0
    }
  ).to('#hero-title-container', 1,
    {
      'y': 100,
    }
  ).set('#hero-subtitle',
    {
      'opacity': 1
    }
  ).to('#hero-subtitle', 1,
    {
      opacity: 0
    }
  );

var transformHeaderScene = new ScrollMagic.Scene({
  duration: '100%',
  triggerElement: '#fold-1',
  triggerHook: 0
})
  .setTween(transformHeaderTimeline)
  // .setPin('#fold-1')
  // .addIndicators({ name: 'transformHeaderScene' })
  .addTo(controller);
