var bubbles = [];
//start with an empty array and JS will try and make it big enough

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 70; i++) {
    bubbles[i] = {
      //have them start in random places between 0 and the width / height
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(255);
        fill(50);
        ellipse(this.x, this.y, 24, 24);
      },
      move: function() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
      }
    }
  }

}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}
