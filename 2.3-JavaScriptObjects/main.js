//instead of having lots of variables floating about
//we can group them into an object
var circle = {
  x : 0,
  y : 200,
  diameter : 50,
};

var r = 160;
var g = 160;
var b = 160;

function setup () {
  createCanvas (600, 400);
}

function draw() {
  background (r, g, b);
  fill (200, 200, 200);
//we can't use x and y anymore, instead use the . to get the
//information from the container "circle"
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);
//incrementation operation:
  circle.x = circle.x + 1;
}
