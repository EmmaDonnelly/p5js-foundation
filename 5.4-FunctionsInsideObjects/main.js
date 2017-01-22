var bubble = {
  x: 300,
  y: 300,
  display: function() {
    stroke(255);
    strokeWeight(1);
    fill(255, 100);
    ellipse(this.x, this.y, 24, 24);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
}
