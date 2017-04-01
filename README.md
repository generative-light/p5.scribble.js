# p5.scribble.js
Draw 2D primitives in a sketchy look in http://p5js.org/.

![Example image](https://github.com/generative-light/scripple-p5.js/blob/master/scribble-p5.js.png)

With p5.scribble.js you can draw
- lines
- curves
- rects
- rects with rounded corners
- ellipses
- hachures

in a sketchy look

# Credits
This is a port of the handy library for processing to p5.js,
so much of the source code is taken from the handy library for processing,
written by Jo Wood, giCentre, City University London based on an idea by Nikolaus Gradwohl.
https://github.com/gicentre/handy

# Examples
In the examples directory you can find examples to see p5.scribble.js in action:
- chart (bar graph) example
![Example image 2](https://github.com/generative-light/scripple-p5.js/blob/master/bargraph.png)

## use headless with phantomJS
If you are interested in using this lib headless, have a look in the example/phantomjs folder    
You will find there a skeleton p5 project for using p5 with phantomJS and the bar graph example in it    
- Just fix the path to p5.min.js and p5.scribble.js in render.js    
- Then call "phantomjs render.js" from your command line    
- A screen.png will appear in your folder with the captured image of the sketch
    
If you create some nice stuff with p5.scribble,js, which could fit in the example directory, let me know or send a PR.

# How to use
## Include the file

    <script language="javascript" type="text/javascript" src="/path/to/p5.scribble.js"></script>

## Create an instance
    var scribble = new Scribble();              // global mode
    var scribble = new Scribble( p5Instance );  // instance mode
    
You can use p5js and p5.scribble.js in global or instance mode. 
Just put in the p5 instance to the constructur for instance mode or let it empty for global mode.

## Lines

    scribble.scribbleLine( x1, y1, x2, y2 );

Draws a line from (x1/y1) to (x2/y2).

## Curves

    scribble.scribbleCurve( x1, y1, x2, y2, x3, y3, x4, y4 );

Draws a bezier curve from (x1/y1) to (x2/y2). (x3/y3) and (x4/y4) are the coordinates, the curve is pulled to.

## Rects

    scribble.scribbleRect( x, y, w, h );

Draws a rect centered at (x/y). w and h defines width and height.

    scribble.scribbleRoundedRect( x, y, w, h, radius );

Draws a rect like scribbleRect but with rounded corners.

## Ellipses

    scribble.scribbleEllipse( x, y, w, h );

Draws an allipse centered at (x/y). w and h defines width and height.

## Hachures

    scribble.scribbleFilling( xCoords, yCoords, gap, angle );

Draws a hachure in the polygon defined by the coordinates from the arrays xCoords and yCoords.
The gap defines the space between two hachure lines.
The angle defines the orientation of the lines.

## General appearance
To change the look you can edit the following attributes

    scribble.bowing = yourValue;          // changes the bowing of lines
    scribble.roughness = yourValue;       // changes the roughness of lines
    scribble.maxOffset = yourValue;       // coordinates will get an offset, here you define the max offset
    scribble.numEllipseSteps = yourValue; // defines how much curves will be used to draw an ellipse

This lib works much on random so if you want that your drawings look the same every render step, you should set a seed.

    randomSeed( yourSeed );

## Color and Weight  
Colors and weights are defined like normal in p5.js.

    stroke( 255, 0, 0 );

From now on your (sketchy) drawings are red.

    strokeWeight( 10 );

From now on your (sketchy) drawings are 10 px heavy.
