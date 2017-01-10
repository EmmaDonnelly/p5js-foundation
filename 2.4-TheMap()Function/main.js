var col = 0;

function setup () {
  createCanvas (600, 600);
}

function draw() {
  col = map(mouseX, 0, 600, 0, 255)
  background(col);
  fill(222, 222, 222);
  ellipse(mouseX, 275, 50, 50);
}
