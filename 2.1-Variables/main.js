function setup() {
  createCanvas(1000, 1000);
  background(0);
//if you put background in setup it will only happen once
//so moving shapes will create trails
//put it in draw and it will be redrawn every time
//creating the illustion of movement

}

function draw() {

  fill(200, 200, 200, 50);
  noStroke();
  ellipse(mouseX, mouseY, 25, 25);

  //fill(200, 250, 200);
  //rect(400, 100, 50, 50);
}

function mousePressed() {
  background(0);
}
//this will erase the drawing, by redrawing the background
