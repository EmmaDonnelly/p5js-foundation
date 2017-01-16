function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);

//we previously put the var at the top, which is a global variant
//this is a local variant just used within the draw function

  var x = 0;
  while (x <= width) {
    fill(100);
    ellipse(x, 100, 25, 25);
    x = x + 50;
  }

  for (var x = 0; x <= width; x = x + 50) {
    fill(100);
    ellipse(x, 300, 25, 25);
  }

}
