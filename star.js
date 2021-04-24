function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  noStroke();

  for (let y = 100; y < height; y = y + 200) {
    for (let x = 100; x < width; x = x + 200) {
      star(x, y, 255);
    }
  }
}

function mousePressed() {
  star(mouseX, mouseY, 100);
}

function star(x, y, color) {
  fill(0, color, 0);
  beginShape();
  vertex(x, y - 50);
  vertex(x + 15.45, y - 18.7);
  vertex(x + 50, y - 13.68);
  vertex(x + 25, y + 10.69);
  vertex(x + 30.9, y + 45.1);
  vertex(x, y + 28.86);
  vertex(x - 30.9, y + 45.1);
  vertex(x - 25, y + 10.69);
  vertex(x - 50, y - 13.68);
  vertex(x - 15.45, y - 18.7);
  endShape(CLOSE);
}
