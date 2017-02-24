var sketch = function( p ) {
  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background( 255 );

    // an array with some values
    var values = [ 16, 35, 78, 95, 70, 64, 32, 10, -10, -32, -64, -32 ];
    // calculate a few sizes
    var width      = ( p.windowWidth * 0.7 * 0.98 ) / values.length;
    var spacer     = ( p.windowWidth * 0.3 * 0.98 ) / ( values.length + 1 );
    var halfHeight = p.windowHeight / 2;
    // create an instance of scribble and set a few parameters
    var scribble       = new Scribble(p);
    scribble.bowing    = 0.1;
    scribble.roughness = 1.5;
    // draw a horizontal line across the center of the screen
    scribble.scribbleLine( 0, halfHeight, p.windowWidth, halfHeight );

    // draw every value as a filled rect in a bar graph
    for ( var i = 0; i < values.length; i++ ) {
      // calculate the x and y coordinates of the center of the rect and the height
      var h = halfHeight * 0.01 * values[i];
      var x = ( spacer + width ) * ( i + 1 ) - ( width / 2 );
      var y = halfHeight - h / 2;
      // set the thikness of the rect lines
      p.strokeWeight( 5 );
      // set the color of the rect lines to black
      p.stroke( 0 );
      // draw a rect for the value
      scribble.scribbleRect( x, y, width, h );
      // calculate the x and y coordinates for the border points of the hachure
      var xleft   = x - width / 2 + 5;
      var xright  = x + width / 2 - 5;
      var ytop    = y - ( halfHeight *  0.01 * values[i] / 2 );
      var ybottom = y + ( halfHeight *  0.01 * values[i] / 2 );
      // reduce the sizes to fit in the rect
      if ( ytop > ybottom ) {
        ytop    -= 5;
        ybottom += 5;
      } else {
        ytop    += 5;
        ybottom -= 5;
      }
      // the x coordinates of the border points of the hachure
      var xCoords = [ xleft, xright, xright, xleft ];
      // the y coordinates of the border points of the hachure
      var yCoords = [ ytop, ytop, ybottom, ybottom ];
      // the gap between two hachure lines
      var gap = 3.5;
      // the angle of the hachure in degrees
      var angle = 315;
      // set the thikness of our hachure lines
      p.strokeWeight( 3 );
      //set the color of the hachure to a nice blue
      p.stroke( 0, 50, 180 );
      // fill the rect with a hachure
      scribble.scribbleFilling( xCoords, yCoords , gap, angle );
    }
  };
  p.draw = function() { };
};

new p5(sketch, 'canvas-element');
