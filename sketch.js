function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);

  let hr = hour();
  let mn = minute();
  let sc = second();


  fill(255);
  noStroke();
  textSize(40);
  text(hr + ':' + mn + ':' + sc, 147, 390);


  translate(200, 200);
  rotate(-90);

  strokeWeight(8);
  stroke(230, 126, 34);
  noFill();
  let secAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  stroke(255, 255, 255);
  let minAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(81, 170, 30);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);


  push();
  rotate(secAngle);
  stroke(230, 126, 34);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(255, 255, 255);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(81, 170, 30);
  line(0, 0, 50, 0);
  pop();


  //strokeWeight(2);
  stroke(93, 173, 226);
  //fill();
  point(0, 0);
}