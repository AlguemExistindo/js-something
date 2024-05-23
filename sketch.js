//variable Ball
let xBall = 300;
let yBall = 200;
let dBall = 20;

//Ball speed
let spdXBall = 10;
let spdYBall = 5;
let raio = dBall / 2;

//Wall variable
let xWall = 5;
let yWall = 150;
let wWall = 13;
let hWall = 100;

//eWall variable
let xEWall = 582;
let yEWall = 150;
let spdYEWall;
let miss = 0;

//score
let score = 0;
let eScore = 0;

//game sound
let bonk;
let points;
let bgm;
let wtf;


let hit = false;

function setup() {
  createCanvas(600, 400);
  bgm.loop();
}

function draw() {
  background(0);
  theBall();
  movementBall();
  screenEdge();
  theWall(xWall, yWall);
  movementWall();
  //colisionWall();
  vColisionWall(xWall, yWall);
  theWall(xEWall, yEWall);
  movementEWall();
  //movementEWallP();
  vColisionWall(xEWall, yEWall);
  showScore();
  scoring();
  what();
}

function vColisionWall(x, y) {
  hit = collideRectCircle(x, y, wWall, hWall, xBall, yBall, raio);
  if (hit) {
    spdXBall *= -1;
    bonk.play();
  }
}

function theWall(x, y) {
  stroke("white")
  rect(x, y, wWall, hWall);
}

function movementWall() {
  if (keyIsDown(UP_ARROW)) {
    yWall -=9;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yWall +=9;
  }
}

function colisionWall() {
  if (xBall - raio < xWall + wWall && yBall - raio < yWall + hWall && yBall + raio > yWall) {
    spdXBall *= -1;
    bonk.play();
  }
}

function movementEWallP() {
    if (keyIsDown(87)) {
    yEWall -=9;
  }
  if (keyIsDown(83)) {
    yEWall +=9;
  }
}

function movementEWall() {
  spdYEWall = yBall - yEWall - wWall / 2 - 30;
  yEWall += spdYEWall + miss;
  missCalculation();
}

function missCalculation() {
  if (eScore >= score) {
    miss += 5;
    if (miss >=99){
      miss = 100;
    }
  } else {
    miss -= 1;
    if (miss <= 35){
      miss = 35;
    }
  }
}

 function theBall() {
   stroke("white")
  circle(xBall, yBall, dBall) 
 } 

function movementBall() {
  xBall += spdXBall;
  yBall += spdYBall;
}  

function screenEdge() {
  if (xBall + raio > width || xBall - raio < 0) {
    spdXBall *= -1;
  }
  if (yBall + raio > height || yBall - raio < 0) {
    spdYBall *= -1;
  }
}
 
function showScore() {
  stroke(255);
  textAlign(CENTER);
  textSize(17);
  fill(color(0, 150, 300));
  rect(150, 10, 40, 20);
  fill(255);
  text(score, 170, 26);
  fill(color(255, 140, 0));
  rect (410, 10, 40, 20);
  fill(255);
  text(eScore, 430, 26);
}

function scoring() {
  if (xBall > 590) {
    score += 1;
    points.play();
  }
  if (xBall < 10) {
    eScore += 1;
    points.play();
  }
}

function what() {
      if (score == 59 || eScore == 59) {
      playMode = 'restart'
      wtf.playMode('restart');
      wtf.play();
  }
}

function preload() {
  bgm = loadSound("959031_clukwurk [credit OcularNebula].mp3");
  points = loadSound("points.mp3");
  bonk = loadSound("Bonk.mp3");
  wtf = loadSound("wtf.mp3");
}













console.log("music: Clukwurk - OcularNebula")
