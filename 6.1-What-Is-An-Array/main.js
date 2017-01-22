//in an array the first element is actually zero

var nums = [35, 148, 73, 17];
var num = 51;

function setup() {
  createCanvas(400, 400);
}

function draw() {
background(0);
  ellipse(100, 200, num, num);
  ellipse(200, 200, nums[1], nums[1]);
}

//nums[1] actually corresponds to 148
