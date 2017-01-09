function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(255,0,0);
  fill(255,0,0);
  //like choosing what pen to use, these come before shape functions
  rect(100, 200, 75, 150, 15, 15, 15, 15);
  //as we haven't picked different pens, the ellipse will use the previous ones
  ellipse(180, 100, 100);
  stroke(0,255,0);
  fill(0,0,255);
  line(200, 300, 50, 175);
  //fill will obvs not affect the line
  triangle(230, 275, 258, 220, 286, 275);
}
