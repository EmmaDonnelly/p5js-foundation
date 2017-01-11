var x = 0;
var speed = 3;

function setup() {
  createCanvas(600, 600);
}

function draw () {
  background (30);
  fill(200);
  strokeWeight(0);
  ellipse(x, 300, 30, 30);

  if ( x >= width) {
    speed = -3;
  }
  if ( x <= 0) {
    speed = 3;
  }
  x = x + speed;

}
