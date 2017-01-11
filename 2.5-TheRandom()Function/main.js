var spot = {
  x : 100,
  y : 100,
};

var col = {
  r : 177,
  g : 177,
  b : 177,
};

function setup () {
  createCanvas (windowWidth, windowHeight);
  background(0);
}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, height);
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 25, 25);
}
