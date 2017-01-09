function setup() {
  createCanvas(640,360);
}

function draw() {
  //rectangle - x, y, w, h, [tl], [tr], [br], [bl]
  //[]= radius of top left, top right, bottom right, bottom left
  //OR x ,y, w, h, [detailX], [detailY]
  rect(100, 200, 75, 150, 15, 15, 15, 15);
  //ellipse - x, y, w, [h]
  //if w and h are the same it will be a circle
  ellipse(180, 100, 100);
  //line - x1, y1, x2, y2
  //coordinates for first then second point
  line(200, 300, 50, 175);
  //to color a line use stroke function
  stroke(126);
  arc(50, 50, 80, 80, 0, PI+QUARTER_PI, PIE);
  //point is just x, y
  point(400, 215);
  //quad - four sided polygon
  //x1, y1, x2, y2, x3, y3, x4, y4
  // x and y of first, second, third and fourth points
  quad(138, 131, 186, 120, 169, 163, 130, 176);
  //triangle - x1, y1, x2, y2, x3, y3
  // x and y of first, second, third points
  triangle(230, 275, 258, 220, 286, 275);
}
