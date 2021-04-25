let bubble1;
let bubble2;

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(200, 200, 100, color(255, 234, 0));
  bubble2 = new Bubble(400, 200, 20, color(255, 123, 0));
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();

  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor(x, y, w, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.c = c;
  }

  move() {
    this.x = this.x + random(-2, 2);
    if (this.y === 0 - this.w / 2) {
      this.y = height + this.w / 2;
    } else {
      this.y = this.y - 1;
    }
  }

  top() {
    //if this.y is at the top, stop moving
    if (this.y === this.w) {
      this.x = this.x + random(-2, 2);
    }
  }

  pass() {}

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.w);
  }
}
