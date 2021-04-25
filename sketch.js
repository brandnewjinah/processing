// let bubbles = [15, 28, 13, 9];

// function setup() {
//   createCanvas(600, 400);
// }

// function draw() {
//   background(0);
//   for (let i = 0; i < bubbles.length; i++) {
//     ellipse(100 * i + 100, 200, bubbles[i]);
//   }
// }
let bubble = [];

function setup() {
  createCanvas(600, 400);
  // for (let i = 0; i < 10; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10, 50);
  //   let c = random(0, 255);
  //   bubble[i] = new Bubble(x, y, r, c);
  // }
}

function draw() {
  background(0);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].show();
    bubble[i].move();
  }
}

function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubble.push(b);
}

class Bubble {
  constructor(x, y, w, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.c = c;
  }

  show() {
    noStroke();
    fill(255, 40);
    ellipse(this.x, this.y, this.w);
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-5, 5);
  }
}
