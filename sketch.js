//var sun, sunAnim;

var radValue = 120;
var edgePointXPlus, edgePointXMinus;

var edgePointYPlus; edgePointYMinus;

function preload() {
  //sunAnim = loadImage("Sun.png")
}

function setup() {
  createCanvas(1000, 600)
  
  /*sun = createSprite(450, 300, 10, 10);
  sun.addImage("sun", sunAnim);
  sun.scale = 0.3;
  sun.debug = true;
  sun.setCollider("circle", 0, 0, 300);*/
}

function draw() {
  background("white");

  //Sun Ellipse
  fill(rgb(252, 212, 64));
  ellipse(450, 300, radValue, radValue);
  edgePointXPlus = 450 + radValue / 2;
  edgePointYPlus = 300 + radValue / 2;

  edgePointXMinus = 450 - radValue / 2;
  edgePointYMinus = 300 - radValue / 2;
  //Sun Rad Increment
  radIncre();

  //Planet 1
  if (edgePointXPlus < 575) {
    fill("red")
    ellipse(600, 300, 50, 50);
  }

  if (edgePointYPlus < 400) {
    fill("green")
    ellipse(475, 425, 50, 50);
  }
  
  if (edgePointYMinus >= 140) {
    fill("green")
    ellipse(420, 121, 50, 50);
  }

  if (edgePointXMinus >= 276) {
    fill("green")
    ellipse(250, 290, 50, 50);
  }

  console.log(edgePointYPlus);
  //console.log(mouseX);
  //console.log(dist(edgePointXPlus, 300, 575, 300))
  drawSprites();
}



function radIncre() {
  if (frameCount % 10 === 0) {
    radValue += 10;
  }
}

/*function distCheck(x1, y1, x2, y2) {
  if (dist(x1, y1, x2, y2) <= 0) {
    return false;
  } else {
    return true;
  }
}*/