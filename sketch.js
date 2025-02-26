let categories = ["Aroma", "Melody", "Taste", "Locale", "Narrative", "Scene"];
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let categoryResult = "";
let letterResult = "";

let spinning = false;
let spinDuration = 50; // Adjust for spin speed

function setup() {
  createCanvas(400, 300);
  textAlign(CENTER, CENTER);
  textSize(32);

  let rollButton = createButton("Roll for Nostalgia");
  rollButton.position(width / 2 - rollButton.width / 2, 250);
  rollButton.mousePressed(startSpin);
}

function draw() {
  background(220);

  if (spinning) {
    categoryResult = categories[floor(random(categories.length))];
    letterResult = letters.charAt(floor(random(letters.length)));

    spinDuration--;
    if (spinDuration <= 0) {
      spinning = false;
      spinDuration = 50;
    }
  }

  text("Category: " + categoryResult, width / 2, 100);
  text("Letter: " + letterResult, width / 2, 150);
}

function startSpin() {
  spinning = true;
}
