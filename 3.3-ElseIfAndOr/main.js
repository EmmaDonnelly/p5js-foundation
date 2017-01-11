function setup() {
  createCanvas(600,  600);
}

function draw () {
strokeWeight(0);

  if (mouseX > 500) {
    background(0);
    fill(255);
  }
  else if (mouseX > 400) {
    background(50);
    fill(200);
  }
  else if (mouseX > 300) {
    background(100);
    fill(150);
  }
  else if (mouseX > 200) {
    background(150);
    fill(100);
  }
  else if (mouseX > 100 ) {
    background(200);
    fill(50);
  }
  else {
    background(255);
    fill(0);
  }
  ellipse(300, 300, 100, 100);
}

//you can use && for AND - both statements must be true
//you can use || for OR - one statement must be true
