function setup() {
  //p5 will always create a canvas for you even if you don't command createCanvas
  //width, height
  createCanvas(windowWidth, windowHeight);
  background(74, 105, 110);
}

function draw() {
  noStroke();
  fill(199, 189, 167);
  rect(0, 200, 760, 600);

  fill(155, 122, 70);
  rect(0, 600, windowWidth, 400);

  //first door
  fill(0);
  rect(100, 300, 150, 300, 100, 100, 0, 0);

  fill(83, 48, 22);
  rect(115, 310, 135, 290, 100, 100, 0, 0);

  fill(157, 104, 57);
  arc(250, 440, 130, 130, radians(180), radians(-90));
  rect(185, 440, 65, 160);

  //second door
  fill(0);
  rect(300, 300, 150, 300, 100, 100, 0, 0);

  fill(83, 48, 22);
  rect(315, 310, 135, 290, 100, 100, 0, 0);

  fill(157, 104, 57);
  arc(450, 440, 130, 130, radians(180), radians(-90));
  rect(385, 440, 65, 160);

  //third door
  fill(0);
  rect(500, 300, 150, 300, 100, 100, 0, 0);

  fill(83, 48, 22);
  rect(515, 310, 135, 290, 100, 100, 0, 0);

  fill(157, 104, 57);
  arc(650, 440, 130, 130, radians(180), radians(-90));
  rect(585, 440, 65, 160);

  //big arch
  fill(54, 61, 39);
  rect(760, 100, 460, 600);

  //arch
  fill(200, 190, 140);
  rect(880, 200, 210, 500, 120, 120, 0, 0);

  // fill(98, 86, 45);
  // ellipse(980, 300, 200, 200);

  fill(95, 130, 123);
  rect(880, 210, 190, 490, 120, 120, 0, 0);
}
