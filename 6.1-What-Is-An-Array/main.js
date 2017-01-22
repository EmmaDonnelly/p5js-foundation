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
["Once", "upon", "a", "midnight", "dreary,", "while", "I",
"pondered,", "weak", "and", "weary,", "Over", "many", "a", "quaint", "and",
"curious", "volume", "of", "forgotten", "lore—", "While", "I", "nodded,",
"nearly", "napping,", "suddenly", "there", "came", "a", "tapping,", "As",
"of", "some", "one", "gently", "rapping,", "rapping", "at", "my", "chamber"
"door." "“’Tis", "some", "visitor,”", "I", "muttered," "“tapping", "at",
"my", "chamber", "door—", "Only", "this", "and", "nothing", "more.”"];
