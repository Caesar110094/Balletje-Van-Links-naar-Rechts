class Bal{
  ellipse(x, y,50,50);
  x = x + v;
  y = y + v2;

  if(x <= 25 || x >= 475) {
    v = v * -1;
  }

  if(y <= 25 || y >= 475) {
    v2 = v2 * -1;
  }
}


var x, y, v;

function setup() {
  createCanvas(500, 500);

  x = 50;
  y = 200;
  v = 5;
  v2 = 5;
}

function draw() {
  background(225);

  ellipse(x, y,50,50);
  x = x + v;
  y = y + v2;

  square(225,225,50,50)

  if(x <= 25 || x >= 475) {
    v = v * -1;
  }

  if(y <= 25 || y >= 475) {
    v2 = v2 * -1;
  }

}

function draw() {
  background(225);

  ellipse(x, y,50,50);
  x = x + v;
  y = y + v2;

  square(225,225,50,50)

  if(x <= 25 || x >= 475) {
    v = v * -1;
  }

  if(y <= 25 || y >= 475) {
    v2 = v2 * -1;
  }

}