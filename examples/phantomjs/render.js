var page = require('webpage').create();
page.viewportSize = { width: 1920, height: 1080 };

page.open('page.html', function(status) {
  if ( page.injectJs('path/to/p5.min.js') ) {
    if ( page.injectJs('path/to/p5.scribble.js') ) {
      if ( page.injectJs('sketch.js') ) {
          page.render('screen.png', {format: 'png', quality: '100'});
          phantom.exit();
      }
    }
  }
});
