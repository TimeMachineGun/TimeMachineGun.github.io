
  var inp0;
  var inp1;
  var inp2;
  var inp3;
  var inp4;
var obj;
var i = 0;
var downloaded = false;
	var tempobj = {
  // "Question": Q.value(),
    "Answers" : [
    // A0().value(), 
      // A1().value(), 
      // A2().value(), 
      // A3().value(), 
    ]
  }	
  
function setup() {

	frameRate(20);
	
noCanvas();
  let xPos = (windowWidth-1000)/2;
  let yPos = 200;
	inp0 = createInput('');
  inp1 = createInput('');
  inp2 = createInput('');
  inp3 = createInput('');
  inp4 = createInput('');
  inp0.position(xPos,yPos);
	inp0.size(450,15);
  yPos+=30;
  inp1.position(xPos,yPos);
  yPos+=30;
  inp2.position(xPos,yPos);
  yPos+=30;
  inp3.position(xPos,yPos);
  yPos+=30;
  inp4.position(xPos,yPos);
  yPos+=30;
  inp0.input(Q);
  inp1.input(A0);
  inp2.input(A1);
  inp3.input(A2);
  inp4.input(A3);
	button = createButton('Submit Question');
  button.position(xPos+10, yPos);
  button.mousePressed(saveQ);
  yPos+=30;
	
	dbutton = createButton('Download');
	dbutton.position(xPos+10, yPos);
	dbutton.mousePressed(download);
  
  obj = {"Name":"TestQuiz","Questions":[
  
  ]
        }
}

function saveQ(){
  obj.Questions.push(JSON.parse(JSON.stringify(tempobj));
	
	inp0.value('');
	inp1.value('');
	inp2.value('');
	inp3.value('');
	inp4.value('');
  // Q().value;
}


function Q() {
  // console.log('you are typing: ', this.value());
  tempobj.Question = this.value();
}
function A0() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[0] = this.value();
}
function A1() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[1] = this.value();
}
function A2() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[2] = this.value();
}
function A3() {
  // console.log('you are typing: ', this.value());
  tempobj.Answers[3] = this.value();
}

function draw() { 
  // framerate(20);
  background(220);
  // print(obj);
}

function download() {
  
  
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",dataStr);
dlAnchorElem.setAttribute("download", obj.Name + ".json");
dlAnchorElem.click();
  
//   var fs = require("fs");
// fs.writeFile("./object.json", JSON.stringify(obj), (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File has been created");
// });
  
}
