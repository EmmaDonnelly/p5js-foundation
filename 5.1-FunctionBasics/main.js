var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

//here we have turned the variables into an object - a container

function setup() {
  createCanvas(600, 600);
}

//we have put the three main areas into their own modular functions

function draw() {
  background(0);
  //here we call them
  move();
  bounce();
  display();
}

//here we define them

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }

  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  stroke(255);
  strokeWeight(0);
  fill(200);
  ellipse(ball.x, ball.y, 50, 50);
}

function move() {
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
