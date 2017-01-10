//declare your variable
var circleX;
var circleY;
var circleSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
//initialize your variable
  circleX= 0;
  circleY= 0;
  circleSize=10;
//this can actually be done in var itself as var circleX=0;
}

function draw() {
  background (0);
//use your variable
  ellipse(circleX, circleY, circleSize, circleSize);
//create a loop which changes the value each time:
  circleX = circleX+3;
  circleY = circleY+3;
  circleSize = circleSize+20;
}
