function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  lollipop(100, 100, 50);
  lollipop(300, 300, 150);
  lollipop(450, 400, 90);
}

function lollipop(x, y, diameter) {
  fill(200);
  rect(x-10, y, 20, 150);

  fill(100);
  ellipse(x, y, diameter, diameter);
}
