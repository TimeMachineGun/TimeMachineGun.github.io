var mColor;
var oColor;
var cColor;
var gColor;

var comfortaa;

var Gquestion = "Questions did not load properly";
var Ganswer0 = "testQ0";
var Ganswer1 = "testQ1";
var Ganswer2 = "testQ2";
var Ganswer3 = "testQ3";
var Gqnumber;
var rAnswer;

var loaded = false;

function preload() {
  var url = 'https://raw.githubusercontent.com/TimeMachineGun/' +
    'timemachinegun.github.io/master/TestQuestions.Json';
  questionsjson = loadJSON(url);
  comfortaa = loadFont('https://raw.githubusercontent.com/TimeMachineGun/timemachinegun.github.io/master/Assets/Comfortaa-Regular.ttf');
  //comfortaa = loadFont('assets/Comfortaa-Regular.ttf');
  
  loaded=true;
  
  //console.log("hi");
}

function process(text) {
  createP(text);
}

var Player1 = new Player();
var Player2 = new Player();

var questions = [];
var players;
var totalPlayers = 2;




function setup() {


  frameRate(60);
  textFont(comfortaa);
  mColor = color(170, 0, 80);
  dmColor = color(138, 0, 65);
  cColor = color(24, 16, 173);
  gColor = color(171, 241, 32);
  createCanvas(1000, 425);
  
  
  
  background(mColor);
  loadQs(); // load all the questions
  iterate();
  console.log("questions: " + questions.length);
}


  function handleFileSelect(evt) {    
    
    // A FileList
    var files = evt.target.files;
    // Show some properties
    for (var i = 0, f; f = files[i]; i++) {
      var file = createElement('li',f.name + ' ' + f.type + ' ' + f.size + ' bytes');
      file.parent(list);
      
      // Read the file and process the result
      var reader = new FileReader();
      reader.readAsText(f);
      reader.onload = function(e) {
        process(e.target.result);
		
  loaded=true;
		questionsjson = loadJSON(e.target.result);
  
  background(mColor);
  loadQs(); // load all the questions
  iterate();
  console.log("questions: " + questions.length);
      }
    }
}


function Q() {
   console.log('you are typing: ', this.value());
  url = this.value();
}

function loadQdir(){
  loaded=true;
		questionsjson = loadJSON(url);
  
  background(mColor);
  loadQs(); // load all the questions
  iterate();
  console.log("questions: " + questions.length);
}

var Qnumber = -1;
var rando = 0;

function iterate() {
  
  if (Qnumber < questions.length - 1)
  {
  
  Qnumber += 1;
  }

  console.log("iterating " + Qnumber);

  Gquestion = questions[Qnumber].q;
  Ganswer0 = questions[Qnumber].a0;
  Ganswer1 = questions[Qnumber].a1;
  Ganswer2 = questions[Qnumber].a2;
  Ganswer3 = questions[Qnumber].a3;
  rando = getRandomInt(0, 4);
  console.log("rando is " + rando);
  rAnswer = rando;
  if (rando == 0) {
    return;
  }
  if (rando == 1) {
    Ganswer0 = questions[Qnumber].a1;
    Ganswer1 = questions[Qnumber].a0;
  }
  if (rando == 2) {
    Ganswer0 = questions[Qnumber].a2;
    Ganswer2 = questions[Qnumber].a0;
  }
  if (rando == 3) {
    Ganswer0 = questions[Qnumber].a3;
    Ganswer3 = questions[Qnumber].a0;
  }
}

function draw() {
if (loaded){
//   background(153);

  drawBoxes();
  drawWords();
  
  // console.log("test");
  if (Player1.a != null && Player2.a != null) {
    console.log("both have ansered");
    testAnswers();
  iterate();
  }
}
}

function Question() {
  this.q = "What is the answer?";
  // this.a = ["a1","a2","a3","a4"];
  this.a0 = "a0";
  this.a1 = "a1";
  this.a2 = "a2";
  this.a3 = "a3";
}

function Player() {
  // this.answered = false;
  this.keys = [];
  this.a = null;
  this.score = 0;
}

function drawBoxes() {

  stroke(3, 3, 3, 20);
  strokeWeight(6);
  // noStroke();
  strokeJoin(ROUND);
  fill(dmColor);
  rect(50, 125, 425, 100);

  rect(525, 125, 425, 100);

  rect(50, 275, 425, 100);

  rect(525, 275, 425, 100);
  noStroke();
  fill(30, 30, 30);
  rect(0, 0, width, 75);
}

function drawWords() {

  stroke(0, 0, 0);
  strokeWeight(0);
  fill(240, 240, 240);
  textSize(35);
  textAlign(CENTER, CENTER);
  text(Gquestion, width / 2, 75 / 2)

  fill(240, 240, 240);
  textSize(35);
  text(Ganswer0, 50 + (425 / 2), 175)

  fill(240, 240, 240);
  textSize(35);
  text(Ganswer1, 525 + (425 / 2), 175)

  fill(240, 240, 240);
  textSize(35);
  text(Ganswer2, 50 + (425 / 2), 325)


  fill(240, 240, 240);
  textSize(35);
  text(Ganswer3, 525 + (425 / 2), 325)
  
  
  textAlign(LEFT, CENTER);
  fill(240, 240, 178);
  textSize(30);
  text(Player1.score, 25, 35)
  
  textAlign(RIGHT, CENTER);
  fill(240, 240, 178);
  textSize(30);
  text(Player2.score, 975, 35)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function testAnswers() {
  console.log("testing Answers");
  if (Player1.a == rAnswer) {
    Player1.score += 100;
  }
  
  
  if (Player2.a == rAnswer) {
    Player2.score += 100;
  }

  Player1.a = null;
  Player2.a = null;
}

function keyPressed() {
	
if (loaded){

  switch (key) {
    case 'Q':
      Player1.a = 0;
      break;
    case 'W':
      Player1.a = 1;
      break;
    case 'A':
      Player1.a = 2;
      break;
    case 'S':
      Player1.a = 3;
      break;


    case 'I':
      Player2.a = 0;
      break;
    case 'O':
      Player2.a = 1;
      break;
    case 'K':
      Player2.a = 2;
      break;
    case 'L':
      Player2.a = 3;
      break;
  }
  console.log(Player1.a);

  console.log(Player2.a);
  return false; // prevent any default behaviour
  }
}
