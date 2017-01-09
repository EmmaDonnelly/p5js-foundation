function setup() {
  createCanvas (480, 270);
}

function draw() {
  background(150, 150, 150);
  //greyscale is when all three RGB are the same - as with light

  // body
  fill(0, 255, 0);
  rect(230, 145, 20, 60);

  // head
  fill(0, 0, 255);
  ellipse(240, 115, 60, 60);

  // eyes
  fill(0, 255, 0, 150);
  // you can use a fourth value for transparency!
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);

  // legs
  line(230, 205, 220, 215);
  line(250, 205, 260, 215);

  //p5 draws the shapes in layers in the order you write them
  //so if you put background at the bottom it will cover everything else
}
