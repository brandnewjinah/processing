let circleX;
let circleY;
let alpha;
let r, g, b;
let size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
}

function draw() {
  // circleX = random(windowWidth);
  // circleY = random(windowHeight);
  // alpha = random(0, 100);
  // r = random(0, 255);
  // g = random(0, 255);
  // b = random(0, 255);
  // size = random(10, 100);

  noStroke();
  fill(r, g, b, alpha);
  ellipse(circleX, circleY, size, size);

  // circleX = circleX + random(-1, 1);
}
