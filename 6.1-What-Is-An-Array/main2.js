var words = ["Once", "upon", "a", "midnight", "dreary,", "while", "I",
"pondered,", "weak", "and", "weary,", "Over", "many", "a", "quaint", "and",
"curious", "volume", "of", "forgotten", "lore—", "While", "I", "nodded,",
"nearly", "napping,", "suddenly", "there", "came", "a", "tapping,", "As",
"of", "some", "one", "gently", "rapping,", "rapping", "at", "my", "chamber",
"door."];
var index = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(0);

  fill(255);
  textSize(50);
  text(words[index], 14, 200);
}

//to move through to the next word when mouse is pressed
function mousePressed() {
  index = index + 1;

//to make it start again at the beginning no matter how many words you add
  if (index == words.length) {
    index = 0;
  }
}
