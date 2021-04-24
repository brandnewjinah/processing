// let bubble1;
// let bubble2;

// function setup() {
//   createCanvas(600, 400);
//   bubble1 = new Bubble(200, 200, 40, color(255, 234, 0));
//   bubble2 = new Bubble(400, 200, 20, color(255, 123, 0));
// }

// function draw() {
//   background(0);
//   bubble1.move();
//   bubble1.show();
//   bubble1.top();
//   bubble2.move();
//   bubble2.show();
//   bubble2.top();
// }

// class Bubble {
//   constructor(x, y, r, c) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.c = c;
//   }

//   move() {
//     // this.x = this.x + random(-5, 5);
//     if (this.y === this.r) {
//       this.y = this.r;
//     } else {
//       this.y = this.y - 1;
//     }
//   }

//   top() {
//     //if this.y is at the top, stop moving
//     if (this.y === this.r) {
//       this.x = this.x + random(-2, 2);
//     }
//   }

//   show() {
//     noStroke();
//     fill(this.c);
//     ellipse(this.x, this.y, this.r * 2);
//   }
// }

let words = ["hello", "luck", "happy", "sad"];
let index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  fill(255);
  textSize(32);
  text(words[index], 12, 200);
}

function mousePressed() {
  if (index === words.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
}
