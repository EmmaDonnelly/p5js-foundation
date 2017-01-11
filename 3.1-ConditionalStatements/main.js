function setup() {
  createCanvas(600,  400);
}

function draw () {
  background (0);
  fill(255);
  strokeWeight(0);

  if (mouseX > 300){
    fill (0);
    background(255);
  }
  ellipse(300, 200, 100, 100);
}
